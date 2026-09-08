# API guide

> Note: this article refers to how we interact with the Stripe API. For info on getting your EasyPost API key, see [Connect your EasyPost API key to Parcelcraft](/docs/getting-started/connect-easypost).

Parcelcraft doesn't require any software programming skills to use, but for those who have a need to interact with Parcelcraft programmatically, we have a variety of ways to interact with your shipment data.  Parcelcraft makes extensive use of the Stripe API and the EasyPost API.

#### Stripe API

Parcelcraft adds metadata to your PaymentIntents, Invoices, Shipping Rates and Products to manage shipment status and default options.

## Stripe Invoice and PaymentIntents metadata

When a checkout session completes (including payments made through payment links) or an invoice is finalized, our app automatically determines whether the order is for a physical product or for a service.  We use your Stripe Product shippable status, or the shipping rate selected at checkout or attached to the invoice, to indicate via your Stripe metadata whether the order is shippable.  No invoice is required.
Our app will automatically add metadata to the PaymentIntent, and to the invoice when one exists, prior to shipment.  If the order uses a shipping rate or if any product in the order is shippable, metadata with a key of "ship_status" and a value of "unshipped" will be added.  Orders that are marked as unshipped will appear in the unified [Orders list](/docs/full-page-app/orders-list) in Parcelcraft with an **Unshipped** status.

> **How ship status is written:** when you change a ship status in the
> Parcelcraft app, the change is written through the Parcelcraft backend,
> which updates the order and mirrors the `ship_status` metadata to both the
> PaymentIntent and its Invoice (when one exists). This keeps the two objects
> in sync — you'll see the same value on either one.
>
> If you set `ship_status` yourself via the Stripe API, set it on the
> **invoice**: Stripe doesn't send apps an event for metadata-only changes to
> PaymentIntents, so a status written only to a payment isn't picked up until
> the status is next changed inside the Parcelcraft app.

### Prior to shipment

Supported metadata prior to shipment

|Metadata key|Possible metadata values|
|--|--|
|ship_status|**`unshipped`** The order appears in the Orders list with an Unshipped status {% br /%}**`canceled`** The order appears in the Orders list with a Canceled status  {% br /%}**`shipped`** We assume this was shipped or hand delivered outside of the Parcelcraft app {% br /%}**`back_ordered`** The order appears in the Orders list with a Back ordered status {% br /%}**`unshippable`** The order is excluded from the Unshipped view. Used for orders that do not ship {% br /%}**`(no value)`** We assume this is a non-shippable invoice or the status has not been determined {% br /%}|
|is_return|`true` (as a string) when a shipment is created, the shipment will be created as a return shipment by default|

### After shipment

PaymentIntents and Invoices will mirror each other's metadata values at the time of shipment.  If no invoice exists for a paymentIntent, only the paymentIntent metadata will reflect these values:

| Metadata key | Metadata value example |
| -- | -- |
| ship_date | **2024-05-24T18:07:34Z** |
| ship_status | **shipped** (Could be value of unshipped, canceled, back_ordered or unshippable.  If the ship_status metadata does not exist on the invoice or payment we assume it is to be not shippable) |
| shipment_id | **shp_bdf04565433...** The EasyPost shipment ID |
| tracking_number | **9434600110368044455854** |
| tracking_URL | **<https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=9434600110368044455854>** |
| service_name | **USPS Ground Advantage** |
| is_return | `true` (as a string) the shipment was a **return label** (this metadata key will be absent if the shipment was not a return shipment) |

## Stripe Product metadata

All values are optional, but having product defaults help prepare your shipment according to your product metadata.

| Metadata key | Metadata value example |
| -- | -- |
| customs_description | SIM card |
| origin_country | US |
| tariff_code | 8523.52.00 |
| weight | 0.44 |
| weight_unit | Either `gram`, `ounce`, `pound`, or `kilogram`.  Defaults to ounce |
| is_return | `true` Defaults to null or false |

## Stripe Shipping Rate metadata

All values are optional, but having product defaults help prepare your shipment according to your shipping rate metadata, if you use shipping rates in your Stripe Invoices.

| Metadata key | Example | Description |
| -- | -- | -- |
| carrier_id | `ca_c38cd24...` | Your EasyPost carrier id |
| package_code | `Letter` | The package code for your EasyPost carrier. Defaults to `Package`. See <https://www.easypost.com/carriers> |
| packaging_weight | `.26` | The weight of your packaging.  The final weight of your package will be based on your product weight and product quantity |
| packaging_weight_unit | `ounce` | Either `gram`, `ounce`, `pound`, or `kilogram`.  Defaults to `ounce` |
| service_code | `Priority` | The compatible service level (Ground, Priority NextDayAir) for your EasyPost carrier. See <https://www.easypost.com/carriers> |
| width | `10` | The default packaging width in the dimension unit (inches or centimeters) as set in your Parcelcraft carrier settings |
| length | `5` | See above |
| height | `8` | See above |

## Stripe Customer metadata

- Some addresses (for example shared office spaces) may require a company name for a successful shipment.
- If your Stripe customer record has a `company` metadata value, we'll automatically add their company name to the customer's shipping address when you create a shipment.
- **You usually don't need this metadata.** When you ship from the [Orders list](/docs/full-page-app/orders-list) in the Parcelcraft app, we use the business name Stripe collects at checkout automatically — the `company` metadata is only a fallback, and is mainly useful for shipments created from invoice, payment, or customer detail pages.
- Tip: you can also capture a company name with a checkout custom field and map it to the company line. See [Print checkout custom fields on labels](/docs/additional-automation/custom-field-mapping).

|Metadata key| Metadata value example  |
|--|--|
| company | `Acme Incorporated` |

## Checkout session & Payment Link custom fields

Parcelcraft reads the [`custom_fields`](https://docs.stripe.com/payments/checkout/custom-fields) array on completed checkout sessions (including sessions created by payment links). When custom field mapping is enabled, the values your customer entered are applied to shipments created from that order:

| Mapped position | Shipment field |
| -- | -- |
| Company (in address) | The `company` line of the recipient address |
| Line 1 custom text | The shipment's `print_custom_1` option |
| Line 2 custom text | The shipment's `print_custom_2` option |

Fields are matched by their custom field **key**, so a key reused across payment links only needs to be mapped once. See [Print checkout custom fields on labels](/docs/additional-automation/custom-field-mapping) for setup instructions.
