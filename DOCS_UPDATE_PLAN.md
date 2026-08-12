# Docs update plan — catching up to v2.0.0 (full-page app release)

Working agreement: one topic per session. Claude drafts the edits and lists the
screenshots it needs; Benson captures the screenshots and drops them in
`public/images/`. Check off tasks as sessions complete, and note the image
filenames actually used.

Source of truth for what changed: [pages/changelog.mdx](pages/changelog.mdx)
(v2.0.0, Aug 11 2026 — plus v1.7.0 and v1.4.1 items that were never documented).

## Why the docs are stale

Nearly every tutorial describes the old drawer-only flow: "click the
Parcelcraft icon on the Home page → **+ Create shipping label** → **or start a
blank label**". Since v2.0.0 there is also a full-page app in the Stripe
dashboard (unified Orders list, Create shipment tab, Shipment history tab),
with bulk shipping and a new shipment focus view. None of that exists in the
docs. Several v2.0.0 features (carrier-aware options, third-party billing,
tax identifiers, package validation) and some older features (pickups,
insurance, scan forms) have no docs at all.

---

## Session 1 — Full-page app overview + Orders list (NEW section) — DONE 2026-08-10

Created `pages/full-page-app.mdx` (overview) + `pages/full-page-app/orders-list.mdx`

+ `pages/full-page-app/_meta.ts`; added 'full-page-app' to `pages/_meta.ts`
(after Getting Started). Images live in `public/images/v2/`.

Content:

+ [x] How to open the full-page app in the Stripe dashboard
+ [x] The unified Orders list: built from payments and invoices, tabs for
      Orders / Shipment history. With buttons links to create a shipment,
      manage EasyPost balance, schedule an EasyPost Pickup, and create
      End of Day Shipping manifest forms
+ [x] Filtering by shipping status, date range, and product; live status
      counts (Unshipped, Shipped)
+ [x] Changing ship status from the list; statuses mirrored to payment and
      invoice
+ [x] Relationship to the drawer: interchangeable surfaces with identical
      functionality (except 1-click shipping, drawer-only); drawer's
      unshipped list uses the same orders backend. NOTE: the legacy-list
      flag `useLegacyUnshippedList` is NOT a public feature and is being
      removed from the app entirely — it is not documented anywhere
      (also stripped from the v2.0.0 changelog entry).
+ [x] Direct links added to full-page-app.mdx: full page
      `dashboard.stripe.com/app/com.productivity.parcelcraft`, drawer
      `dashboard.stripe.com/dashboard/?open_drawer_app=com.productivity.parcelcraft`
      (account-agnostic URLs).

Screenshots needed:

+ [x] Full-page app entry point — `how-to-open-the-parcelcraft-app-and-fullpage-view.png`
      (also covers the Orders list with tabs + status counts; reused on both pages)
+ [x] Orders list with tabs visible and status counts — same image as above
+ [x] Filter controls open — `Filter-by-product.png`,
      `filter-orders-by-time-frame-and-resync.png`
+ [x] Drawer ↔ full-page switcher — `expand-or-contract-to-the-full-page-or-drawer.png`
+ [x] Shipment history tab — `full-page-shipment-history-tab.png`

Screenshots already staged in `public/images/v2/` for later sessions:
`create-shipment-set-shipment-options.png`, `options-3rd-party-billing.png`,
and `create-shipment-options-set-defaults-for-future-shipments.png`
(Session 4), `shipment-tax-id-settings.png` (Session 5),
`create-shipment-print-shipment.png`,
`create-shipment-print-shipment-step-2-print-pdf.png`, `wallet.png`,
`pickups-step1-select-shipments.png`, and `pickups-step2-schedule.png`
(Session 6).
Old drawer-era images in `public/images/` (e.g. `parcelcraft-dashboard.png`,
`create-shipment.png`) still need v2 replacements — Session 7 sweep.

## Session 2 — Creating a shipment: the focus view (NEW page + rewrite of old flows) — DONE 2026-08-10

Created `pages/full-page-app/create-shipment.mdx` ("Creating a shipment");
added to `pages/full-page-app/_meta.ts`; cross-linked from
`full-page-app.mdx` (+ Create shipment row) and `orders-list.mdx`.

+ [x] New page: focus view walkthrough — contextual tabs (Configure always;
      Review customs when international; Print label after purchase),
      package/carrier/weight sections, rate selection, after-purchase flow
      (insurance, PrintNode, tracking email, print page step 2)
+ [x] Package size and weight validation: metadata limits = errors,
      published carrier guidelines (USPS 70 lb/130"; UPS/FedEx 150 lb/108"
      side/165" combined) = warnings; messages in the user's units
+ [x] Buy label / Print test disabled until carrier+service chosen or a
      quoted rate selected; Buy disabled in Stripe test mode; edits after
      quoting invalidate the quote (re-quote required)
+ [x] Rewrote print-test-label.mdx — blank shipment via **+ Create
      shipment**, Print test footer button, print page (4x6 / 8.5x11 /
      packing slip), PrintNode tip
+ [x] Updated international-test-label.mdx — customs panel appears inline
      automatically (auto-saved, no dialog/Save); Review customs purchase
      gate; declare items / shipment type / certify + signer

Screenshots used:

+ [x] Focus view, domestic — `create-shipment-configure-single-shipment.png`
+ [x] Validation error/warning states — `create-shipment-inline-error-states.png`
+ [x] Customs panel — `create-shipment-customs-tab.png` (batch "Review
      customs" tab; same panel appears inline in single mode)
+ [x] Print label tab — `create-shipment-print-shipment.png`
+ [x] Print page step 2 — `create-shipment-print-shipment-step-2-print-pdf.png`
+ [x] Blank shipment entry point — covered by session 1's
      `how-to-open-the-parcelcraft-app-and-fullpage-view.png` (+ Create
      shipment button visible)

Nice-to-have (not blocking): a shot of the rate list after **Get Quote**
with a rate selected, and the customs panel inline in a single shipment —
would replace the batch-tab customs shot on the international tutorial.

## Session 3 — Bulk shipping (NEW page) — DONE 2026-08-10

Created `pages/full-page-app/bulk-shipping.mdx`; added to
`pages/full-page-app/_meta.ts`; cross-linked from `full-page-app.mdx`,
`orders-list.mdx`, and `create-shipment.mdx`.

+ [x] New page: select orders → Bulk actions bar → **Create N shipments** →
      Batch Shipment view. Footer steps: **Get Quotes** → per-row rate
      dropdowns (cheapest first; preset carrier+service auto-selects and can
      buy without quoting) → **Review customs** tab when international
      (blocks purchase until complete; shared "Declare your shipment type"
      section applies to all) → **Buy N Labels** (**Print N Test Labels** in
      test mode; partial failures retry per row) → Print label tab.
      Also covered: one ship-from per batch, inline per-row editors,
      apply-to-selected bulk bar, Remove selected, Needs attention chips.
      NOTE: plan said "summary footer" in the Orders list — the real UI is a
      **Bulk actions bar above the list**; the sticky footer lives in the
      batch view. No max batch size; selection persists across pages; bulk
      also works in the drawer.
+ [x] Printing many labels: footer **Print N Labels** = one combined PDF;
      per-order packing list rows; Send all to PrintNode (auto-print pauses
      if any shipment failed); Add insurance to all; label size/packing slip
      prefs come from Settings. Shipment history bulk reprint mentioned.

Screenshots used (all in `public/images/v2/`):

+ [x] Orders selected + Bulk actions bar / batch view —
      `create-shipment-bulk-shipment.png`
+ [x] Quoting / rate selection — `create-shipment-get-a-quote-with-all-carriers.png`
+ [x] Review customs tab — `create-shipment-customs-tab.png` (reused from
      Session 2)
+ [x] Bulk print view — decided not needed; no image on that section

## Session 4 — Shipment options, third-party billing, defaults (NEW page) — DONE 2026-08-10

Created `pages/full-page-app/shipment-options.mdx`; added to
`pages/full-page-app/_meta.ts`; cross-linked from `create-shipment.mdx`
(options bullet) and `set-carrier-defaults.mdx` (Default Settings section).

+ [x] New page: carrier-aware shipment options — inline frequent options
      (Return label, Saturday delivery on UPS/FedEx, custom label text),
      "Show more options" expander, options filtered by carrier with an
      availability table (Saturday delivery = UPS/FedEx; certified/registered
      mail = USPS-only; hold-at-location/dropoff = FedEx). Also covered:
      values survive carrier switches but are filtered out of quotes/buys;
      quote-all applies only all-carrier options (ballpark price, re-quote
      after picking a carrier — matches the in-UI caption); dependent fields
      (dry ice weight); set-count on the expander label ("Show more options
      (2 set)"); option edits invalidate quotes. NOTE: the plan said the
      expander is "grouped by category" — the real UI renders NO visible
      category headings; categories only order the two balanced columns, so
      the page says "ordered by kind". The Tax IDs section renders below the
      option columns inside the expander — brief pointer added, full docs in
      Session 5.
+ [x] Third-party billing: **Bill shipping charges to** (My account /
      Third-party account / Receiver's account) with account number + postal
      code, country code for third-party only; UPS / FedEx / DHL Express;
      unavailable for USPS and UPS accounts from EasyPost's Digital Access
      Program; **Bill duties & taxes to** noted for international.
+ [x] Default shipment options via the per-option gear menu ("Set as default
      for future shipments"): snapshot semantics (per-shipment edits don't
      update the saved default), highlighted gear = default saved,
      carrier-specific defaults apply only on that carrier, per-order fields
      (ship date, invoice number) have no gear. The v1.7.0 "always create
      return shipments" preference is documented as the Return-label
      option's gear default (the new UI has no separate switch; the legacy
      `defaultReturn` setting only lives in the old invoice-flow component).
+ [x] Cross-link from [pages/enable-1-click-shipping/set-carrier-defaults.mdx](pages/enable-1-click-shipping/set-carrier-defaults.mdx)

Screenshots used (all in `public/images/v2/`):

+ [x] "Show more options" expanded (two columns, set-count in header, Tax
      IDs below) — `create-shipment-set-shipment-options.png`
+ [x] Third-party billing fields — `options-3rd-party-billing.png`
+ [x] Defaults gear menu — `create-shipment-options-set-defaults-for-future-shipments.png`
+ [x] Collapsed/inline options — covered by Session 2's
      `create-shipment-configure-single-shipment.png` on the create-shipment
      page; not repeated here
+ [x] Different-carrier comparison shot — decided not needed; the
      availability table covers it

Nice-to-have (not blocking): a shot of the quote-all caption ("Showing
options available on all carriers…") and one of a highlighted gear on an
option with a saved default.

## Session 5 — Tax identifiers + international updates — DONE 2026-08-10

Created `pages/international-shipping/tax-identifiers.mdx`; added to
`pages/international-shipping/_meta.ts` (also normalized the section's nav
labels to sentence case; slugs unchanged); cross-linked from
`shipment-options.mdx` (Tax IDs pointer now targets the new page),
`international-shipping.mdx`, and `international-settings.mdx`.

+ [x] New page: sender tax IDs saved in **Main settings → Tax IDs**
      (multiple registrations; type + number + issuing country, with an
      explicit **European Union** country entry), prefilled onto every
      shipment; receiver tax IDs prefilled from the customer's Stripe tax
      IDs with type translation (eu_oss_vat → IOSS, gst_hst → GST, …);
      per-shipment review/edit/add/remove at the bottom of **Show more
      options** (one-off edits don't touch saved settings); incomplete rows
      (missing type/number/country) are skipped at purchase, never
      blocking; type dropdown limited per carrier — USPS: VAT/IOSS; UPS:
      +VOEC/HMRC; FedEx: VAT/IOSS/GST/EORI/HMRC/UKIMS/EIN/SSN/STA; DHL
      Express: large set incl. deferment accounts, IOSS entered under SDT;
      other carriers + quote-all offer every type. Unsupported prefilled
      types stay visible with a may-be-ignored caption. Carrier table from
      `carrierTaxIdTypes` in src/common/data/tax-entities.ts (what the UI
      actually offers), NOT the older settings tooltip table, which
      disagrees for FedEx (tooltip says TIN only).
+ [x] Rewrote international-settings.mdx step 2 (was a single "Tax ID"
      field) to describe the Tax IDs list; fixed "Govornment" typo; h1 to
      sentence case
+ [x] Expanded international-shipping.mdx intro: inline customs declaration
      (auto-prefill, auto-save, link to walkthrough) + tax identifiers
      paragraph

Screenshots used:

+ [x] Tax identifiers section on a shipment (sender + receiver rows) —
      `shipment-tax-id-settings.png` (the provided shot shows the
      per-shipment section, not the settings tab)

Nice-to-have (not blocking): a shot of the **Main settings → Tax IDs** list
in Parcelcraft settings for the "Save your sender tax IDs" section, and one
of the carrier-limited type dropdown open.

## Session 6 — Printing, labels, and after-purchase features — DONE 2026-08-10

Created four pages under `pages/full-page-app/` (all features work in both
surfaces, but the toolbar buttons live in the full-page app):
`pickups.mdx` ("Pickups"), `insurance.mdx` ("Insurance"), `end-of-day.mdx`
("End-of-day scan forms"), `wallet.mdx` ("Wallet"); added to
`full-page-app/_meta.ts`; linked from the full-page-app.mdx button table,
create-shipment.mdx (After you buy), bulk-shipping.mdx (print section +
closing pickup/scan-form pointer), and orders-list.mdx (Shipment history
paragraph).

+ [x] Print label view: added the tracking-email badge wording ("Tracking
      email sent to …" / "No email sent (test label)") to bulk-shipping.mdx;
      packing list + recipient were already covered there and in
      create-shipment.mdx
+ [x] Pickups page: entry points (toolbar/drawer/print view/shipment
      history), 3-step flow (select shipments per carrier → schedule →
      Check availability → Buy Pickup with cost shown), FedEx/UPS/USPS/DHL
      only, one carrier per pickup, Sundays excluded, 8 AM-5 PM windows,
      instructions+window saved as defaults, test-mode note, Pickups tab
      (cancel-then-reschedule, hidden canceled/past)
+ [x] Insurance page: post-purchase only surfaces (print tab, bulk rows +
      "Add insurance to all shipments", shipment history), 1% / $1 minimum,
      allowed only until first carrier scan, "Claim insurance" → EasyPost
      claim form
+ [x] End-of-day page: auto-groups purchased shipments (last 2 days) by
      location+carrier, one form per carrier, Print/Reprint scan form,
      exclusions (refunded/returns/already-manifested/already-scanned),
      FedEx+UPS never included (excluded in code — point to pickups),
      live-mode only
+ [x] Wallet page: balance + week-of-costs recommendation, add funds
      (bank ACH free 3-5 days vs card instant 3.75%, $20 min), auto-refill
      rule via Edit wallet settings ($0 trigger disables), payment methods
      managed in EasyPost, production-key requirement
+ [x] Rewrote setup-print-to-email.mdx: added the actual settings steps
      (Printers & digital scale → "Send as attachment in email" +
      "Email labels to:" prefilled with dashboard email), @parcelcraft.com
      sender note, packing-slip note, sentence-case h1; removed the stale
      "test from printer settings page" claim (those test buttons are
      PrintNode-only) → now points at the print-test-label tutorial
+ [x] setup-printnode-account.mdx: sentence-cased h1/steps, fixed
      "Print Test label" → "Print test label", replaced "label size and
      orientation" with the real capability settings (paper size, bin,
      media, DPI, rotation, fit to page)
+ [x] Sentence-cased nav labels in `additional-automation/_meta.ts` and
      `enable-1-click-shipping/_meta.ts` (slugs unchanged, matching the
      Session 5 treatment of international-shipping)

Screenshots used (all in `public/images/v2/`):

+ [x] Pickup step 1 (select shipments) — `pickups-step1-select-shipments.png`
+ [x] Pickup step 2 (schedule form) — `pickups-step2-schedule.png`
+ [x] Wallet — `wallet.png`
+ [x] Print label view with packing list + tracking-email badge — decided
      not needed as a new shot; `create-shipment-print-shipment.png`
      already illustrates the print tab

Nice-to-have (not blocking): a shot of the insurance field on the print
tab (for insurance.mdx, currently text-only), the End of day scan forms
view with a "Print scan form" button (end-of-day.mdx, currently
text-only), and the pickup confirm step showing "Pickup cost".

NOTE for the app (not docs): the "Request pickup" button in the
manage-shipment focus view calls `history.push` from `useHistory()`, which
is undefined when mounted on the full-page Shipment history tab (outside a
MemoryRouter) — works from the drawer. Flagged as a separate task.

## Session 7 — Sweep of existing pages + navigation — DONE 2026-08-10

+ [x] [pages/index.mdx](pages/index.mdx): added links to the full-page app,
      bulk shipping, and shipment options; fixed "Aditional resources" typo;
      sentence-cased headings and link labels
+ [x] [pages/faq.mdx](pages/faq.mdx): Orders-list language throughout.
      The 30-second Stripe Search claim is OBSOLETE and was removed — the
      orders path no longer touches Stripe Search (only the legacy
      UnshippedList behind the internal flag does). Manual
      `ship_status=unshipped` invoice metadata arrives via the
      `invoice.updated` webhook in seconds; the only user-visible delay is
      the list refresh ("Refresh data" link / 10-minute auto-refetch) — FAQ
      now says that. Legacy-list toggle deliberately NOT documented (Session
      1 decision — flag is being removed). Added caveats verified in code:
      draft invoices excluded until finalized; product shippable changes are
      not retroactive; metadata-only PaymentIntent edits emit no Stripe
      event, so set `ship_status` on the invoice. Shippability rules (rate
      attached / shippable product / default fallback, computed at
      finalization) re-verified still correct
      (dashboard-parcelcraft/_utils/_webhook-utils/_invoices.ts
      isInvoiceShippable).
+ [x] [pages/troubleshooting.mdx](pages/troubleshooting.mdx): rewritten for
      the focus view — verify via the magnifying glass in Configure
      shipment; strict verification is now the **Address verification**
      option under Show more options ("Reject unverifiable addresses" →
      switch to "Verify address" / "No verification"); quote-all-carriers
      step reuses `create-shipment-get-a-quote-with-all-carriers.png`;
      added package-validation step linking the create-shipment docs and
      reusing `create-shipment-inline-error-states.png`; customs step points
      at the Review customs tab. Old images no longer referenced:
      `edit-address-button.png`, `verify-address-button.png`,
      `address-strict-verify-options.png`, `quote-all-carriers.png`.
+ [x] [pages/api-guide.mdx](pages/api-guide.mdx): added a "How ship status
      is written" note (backend write-through, mirrored to PaymentIntent +
      Invoice) plus the set-it-on-the-invoice caveat; ship_status table
      rewritten in Orders-list terms (filter statuses verified in
      OrdersFullPage.tsx: all/unshipped/shipped/canceled/back_ordered/
      unshippable); metadata tables otherwise still accurate; fixed typos
      (PaymentIntenets, doens't, metatdata, refers how)
+ [x] [pages/enable-1-click-shipping.mdx](pages/enable-1-click-shipping.mdx):
      drawer-only note (SDK limitation) with bulk-shipping link;
      sentence-cased h1
+ [x] [pages/getting-started.mdx](pages/getting-started.mdx): quickstart
      verified accurate; fixed duplicate step "3." numbering; added a
      "Where you'll work" section introducing the two surfaces with
      full-page-app links; sentence-cased h1
+ [x] `_meta.ts` files: full-page-app/_meta.ts already lists all 8 pages;
      sentence-cased the top-level nav (Getting started, 1-click shipping,
      International shipping, Additional automation, API guide) and
      getting-started/_meta.ts labels — slugs unchanged
+ [x] Final pass: stale phrases now only in changelog.mdx (historical
      record, left as-is). `parcelcraft-dashboard.png` and
      `create-shipment.png` are no longer referenced by any page. Also
      sentence-cased + fixed "ParcelCraft" naming in
      get-the-best-shipping-rates.mdx.

Screenshots: no new shots required — troubleshooting reuses Session 2/3 v2
images. Nice-to-have (not blocking): a v2 replacement for `rate-quote.png`
on get-the-best-shipping-rates.mdx (old drawer-era quote UI, still
referenced), and a shot of the address-verify magnifying glass or the
Address verification option for troubleshooting.mdx.

---

## Decisions (answered by Benson, 2026-08-10)

1. **Version numbering:** the release is **v2.0.0** (changelog updated;
   dated Aug 11 2026). All docs references use 2.0.0.
2. **Drawer vs full-page:** the two surfaces are interchangeable — identical
   functionality in both. Docs should not present the drawer as legacy;
   describe features once and note they work in either surface.
3. **Exception:** 1-click shipping exists **only in the drawer** (Stripe SDK
   limitation). The 1-Click Shipping section stays drawer-based; the
   full-page docs should note that bulk shipping is the full-page
   counterpart for high-volume work.
4. **Images:** all screenshots live under
   `P:\Users\benso\Documents\websites\parcelcraft\docs\public` (labels in
   `public/images/`). Path style is unimportant; Benson verifies images load
   on his side.
