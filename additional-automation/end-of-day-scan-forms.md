# Create end-of-day scan forms

An end-of-day scan form (also called a shipping manifest or SCAN form)
bundles every package you're handing to a carrier into a single barcode.
Instead of scanning each label one by one, the driver or counter clerk
scans the one form and every shipment on it is accepted at once. Each
package gets its **Accepted for shipment** tracking event the moment the
carrier takes possession, so your customers see their order moving right
away instead of hours later when it's processed at the facility.

Parcelcraft builds the day's scan forms for you. There is nothing to
configure and no shipments to pick by hand: open the view, choose a
ship-from location if you have more than one, and print.

## When to use a scan form

- You ship several USPS or DHL packages a day and hand them to a driver or
  drop them at a counter.
- You want tracking to show **Accepted** at handoff rather than when the
  carrier's facility gets around to scanning each package.
- You've scheduled a [driver pickup](/docs/full-page-app/pickups) and want
  the pickup to take seconds instead of minutes.

## Open End of day scan forms

- **In the drawer:** open Parcelcraft on a payment, invoice, or customer
  (or from the dashboard home) and click **End of day** in the footer menu
  next to **Wallet** and **Pickups**.
- **In the full-page app:** click **End of day** in the button row at the
  top of the [full-page app](/docs/full-page-app).

Either way you land on **End of day scan forms**.

> In Stripe **test mode**, the view creates test scan forms for your test
> labels. They look like the real thing, so you can try the whole flow
> before shipping for real, but they can't be handed to a carrier. Switch
> to live mode for real shipments.

## How Parcelcraft builds the forms

When the view opens, Parcelcraft:

1. Loads every shipment you've purchased in the **last two days**.
2. Skips shipments that can't go on a form:
   - refunded or voided labels,
   - return labels,
   - shipments that are already on a scan form,
   - packages the carrier has already scanned, and
   - FedEx and UPS shipments (see [Carrier support](#carrier-support)).
3. Groups what's left by **ship-from street address**, then by carrier.
4. Creates one scan form per carrier for the location you select.

Because shipments already on a form are skipped, you can open **End of
day** as often as you like without ever manifesting the same package twice.

## Step 1: choose your ship-from location

If all of your recent shipments leave from one address, that location is
selected for you and the forms start creating immediately.

If you ship from more than one address, pick one from the **Ship from
location** dropdown. Forms are created for that location as soon as you
choose it. To manifest another location, select it from the same dropdown
afterwards — the first location's forms are already saved and appear in
[Scan form history](#reprint-an-earlier-form).

Locations are matched on the exact first line of the ship-from address, so
two spellings of the same street ("123 Main St" and "123 Main Street")
appear as two locations. Each still gets a valid form; it just means two
prints instead of one.

## Step 2: print each form

Each carrier gets its own row showing the carrier name and how many
shipments are on the form. While the carrier is generating the document
the row reads **Creating** with a spinner; Parcelcraft checks back every
couple of seconds until it's ready. Most forms are ready in under ten
seconds.

When a form is ready, click **Print scan form**. The PDF opens in a new
browser tab — print it and hand it to your driver or the counter clerk
with your packages.

If you ship with two supported carriers from the same address (USPS and
DHL, say), you get two rows and two forms. Give each carrier its own.

### If a row shows an error

When a carrier rejects a form, the row shows **Error** in red. Hover over
it to read the carrier's own message. The usual causes are:

- **A package was scanned before the form was created.** Carriers won't
  put an already-accepted package on a manifest. Reopen **End of day** —
  the scanned package is skipped and a fresh form is created for the rest.
- **The carrier account can't manifest.** Some carrier accounts, such as
  brand-new accounts still being verified, can't create scan forms yet.
  Check the carrier account in the Parcelcraft settings and try again
  later.

An error doesn't affect the labels themselves. The packages ship fine
without a scan form; the driver just scans each one individually.

## Shipments created after the form

A scan form can't be edited once it exists, and a shipment can only ever be
on one form. Labels you print later in the day aren't on the form you
already created. Open **End of day** again and Parcelcraft creates a new
form containing only the shipments that aren't manifested yet. Hand the
driver both forms.

Print your scan form as the last thing you do before the carrier arrives,
after every label for the day is purchased, and you'll usually only need
one form per carrier per day.

## Carrier support

Scan forms are supported for **USPS** and **DHL** shipments.

**FedEx and UPS shipments are never included, and don't need a scan
form.** Both carriers are manifested electronically: the moment you buy a
FedEx or UPS label, the end-of-day close-out data is transmitted to the
carrier automatically. There is no printed manifest to create, and
nothing to hand the driver. If a driver asks for an end-of-day report,
tell them it was sent electronically when the label was purchased.

The one difference from a scan form is when tracking starts. Without a
scan at handoff, a FedEx or UPS package's tracking usually begins at the
carrier's facility. If you want customers to see movement the moment the
driver leaves, ask the driver for an acceptance scan on each package.

To arrange collection for FedEx or UPS packages, schedule a
[driver pickup](/docs/full-page-app/pickups).

## Reprint an earlier form

**Scan form history** at the bottom of the view lists the forms you've
created in the last two days, newest first (up to ten). Each row shows how
long ago the form was created and how many shipments are on it. Hover the
info icon to see the ship-from address and every tracking number on the
form.

- Click **Reprint scan form** to open a form's PDF again — handy if the
  first print jammed or the driver needs a second copy.
- A form that was still generating shows **Creating…**. Click **Reload
  history list** to refresh the list once it's ready.

Forms the carrier rejected don't appear in the history.

## Troubleshooting

**"No un-manifested shipments found in the last day"** — there's nothing
left to put on a form. Every recent shipment is already manifested, has
already been scanned by the carrier, is a FedEx or UPS shipment, or is more
than two days old. Create labels first, then come back.

**A package is missing from the form** — the most common reasons:

- It was created more than two days ago. Manifest the same day you print.
- The carrier already scanned it, for example at a drop-off counter.
- It's a return label, or it was refunded.
- It's a FedEx or UPS shipment. Those are manifested electronically at
  purchase and never need a form (see [Carrier support](#carrier-support)).
- It ships from a different address — check the **Ship from location**
  dropdown.

**"No un-manifested shipments" but you shipped today** — if every label
was FedEx or UPS, this is expected: there's nothing to manifest by hand.

**The forms only show test labels** — Stripe is in test mode. Switch to
live mode to manifest real shipments.

**The driver won't accept the form** — make sure the ship-from address on
the form (hover the info icon in the history) matches the location the
driver is collecting from, and that the form is for the driver's carrier.
A USPS driver can't accept a DHL form or vice versa.
