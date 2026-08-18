# Setting international shipping defaults

To enable seamless international shipping with Parcelcraft, follow these steps:

1. **Define shippable products**: In the **Shippable products** tab of the [Parcelcraft Settings page](https://dashboard.stripe.com/settings/apps/com.productivity.parcelcraft), enter the customs description and tariff code for each product you plan to ship internationally. This information will be used to populate the customs sheet. Incorrect descriptions or tariff codes can cause shipment delays. The US Government has a searchable Tariff schedule at https://hts.usitc.gov/

2. **Save your tax IDs**: In the **Tax IDs** section of the **Main settings** tab, save each tax registration you hold — IOSS, VOEC, EORI, VAT, GST, EIN, and more — with its type, number, and issuing country. You can save as many as you need, and they prefill onto every shipment as sender tax IDs; your customer's tax IDs prefill from their Stripe record. Carriers pass these to customs to speed up clearance. See [Tax identifiers](/docs/international-shipping/tax-identifiers) for details.

3. **Configure carrier settings**: Ensure that your chosen shipping carrier supports international shipping and that you have the necessary account credentials set up in the **Carrier defaults** tab of the [Parcelcraft Settings page](https://dashboard.stripe.com/settings/apps/com.productivity.parcelcraft).
