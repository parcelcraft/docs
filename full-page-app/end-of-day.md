# End-of-day scan forms

A scan form (also called a shipping manifest) bundles the day's shipments
into a single barcode. Instead of scanning every package individually, your
carrier's driver scans one form and accepts everything at once — faster
handoffs, and every package gets its first tracking scan immediately.

Click **End of day** at the top of the [full-page app](/docs/full-page-app), or
in the drawer's footer menu, to open **End of day scan forms**.

## Create the day's scan forms

There's nothing to configure. Parcelcraft finds your purchased shipments
from the last two days, groups them by ship-from location and carrier, and
creates one scan form per carrier automatically. If you ship from more
than one location, choose the **Ship from location** first.

When a form is ready, click **Print scan form** to open the PDF — print it
and hand it to your driver.

A shipment is included if it's purchased and still waiting for the
carrier: refunded shipments, return labels, shipments already on a scan
form, and packages the carrier has already scanned are skipped. Shipments
you create later in the day aren't on the form — open **End of day** again
to create a fresh form for them.

## Carrier support

Scan forms are for carriers such as USPS and DHL. FedEx and UPS shipments
are never included — those carriers don't use scan forms, so schedule a
[driver pickup](/docs/full-page-app/pickups) instead.

> Scan forms can only be created while Stripe is in live mode — there are
> no test scan forms.

## Reprint an earlier form

**Scan form history** at the bottom of the view lists the forms you've
created, with the number of shipments on each — hover the info icon to see
the ship-from address and tracking numbers. Click **Reprint scan form** to
open a form again.
