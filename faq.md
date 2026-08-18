# Frequently asked questions

## Free trial FAQ

### Q: How long is the free trial?

A: The free trial ends when either of these occurs:

- 90 days after the app is installed in your account
- You and your team collectively create 25 shipping labels

If you haven't created any labels when your trial expires, you'll have the option to extend your trial period.

### Q: How are shipments counted?

A: Test labels and voided shipments are not counted. During the free trial, we count all shipments made by you and your team. With a paid plan, we only count shipments you create across your Stripe accounts.

### Q: Do I need a subscription to view shipments?

A: Team members can view shipment history and unshipped items without a subscription. Subscriptions are only required for users who create shipments.

### Q: Do I need a paid plan for testing?

A: No. You can use Parcelcraft freely in Stripe test mode without a paid plan.

## Billing FAQ

### Q: Can I switch between plans?

A: Yes, you can upgrade, downgrade, or cancel your plan in your account dashboard. If you cancel, your subscription will continue working until the end of your monthly usage term. You can downgrade your plan once every 30 days.

### Q: Can I use multiple Stripe accounts?

A: Yes, your Parcelcraft subscription works across all your Stripe accounts.

### Q: If I purchase an Enterprise 200-shipment yearly plan, how many shipping labels can I create?

A: You can create unlimited shipping labels on any plan. Two hundred shipments per month are included in the Enterprise plan, so that's 2,400 shipments for the year. Your plan doesn't stop working if you go over your allotment. Usage overages are billed monthly, even on yearly plans. Unused shipments do not roll over to the next month.

### Q: What happens if I exceed my monthly shipment limit?

A: If you exceed your monthly limit, additional shipments will be billed at a per-shipment rate. You can also upgrade to a higher tier at any time.

### Q: How does billing work?

A: The billing usage cycle starts on the day you subscribe. Usage overages are billed monthly, even on yearly plans.

## Shipping FAQ

### Q: Why is the **1-click ship** button greyed out and not working?

A: If you hover your mouse over the **1-click ship** button, you will see a popup window showing what is preventing 1-click shipping in red text. Read the [1-click shipping section](/docs/enable-1-click-shipping) to configure all the necessary settings. Note that 1-click shipping is only available in the drawer — in the [full-page app](/docs/full-page-app), use [bulk shipping](/docs/full-page-app/bulk-shipping) instead.

### Q: Why can't I get rates using the FedEx Ground account?

A: The FedEx ground carrier account (known as FedEx Default in your EasyPost dashboard) is limited in the types of service it offers.  Add a FedEx account by adding a FedEx carrier in the EasyPost dashboard to enable quotes and shipments for overnight shipping.

### Q: Why don't my invoices appear in the Orders list?

A: When an invoice is finalized, our Parcelcraft server determines whether it is shippable:

1. If there is a shipping rate attached to the invoice, it will appear in your [Orders list](/docs/full-page-app/orders-list) as **Unshipped**.
2. If any product in your invoice is shippable, it will appear in your Orders list as **Unshipped**.
3. Your default product "shippable" setting is used for products where you haven't set a shippable status.

This calculation happens when your invoice is finalized — draft invoices don't appear in the Orders list. If invoices that should be shippable are not appearing, browse to the products used in your invoice, open the Parcelcraft Shipping app, and confirm they are marked as "shippable" in the Parcelcraft app. (Changing a product's shippable setting applies to future invoices; it doesn't re-evaluate existing orders.)

To add an order to the Orders list manually, browse to the invoice in Stripe and change its status to "Unshipped" in the Parcelcraft app, or add metadata to your Stripe invoice with a key of `ship_status` and a value of `unshipped`. The change syncs to Parcelcraft within a few seconds; if you already have the Orders list open, click **Refresh data** to see it (the list also refreshes itself every 10 minutes).

If you're more programmatically inclined: invoices with a `metadata` key of `ship_status` and a value of `unshipped` will appear in your Orders list as Unshipped. Set the metadata on the **invoice**, not only on the payment — Stripe doesn't notify apps about metadata-only changes to PaymentIntents, so those are only picked up when you change the status inside the Parcelcraft app. See the [API guide](/docs/api-guide) for all supported metadata.

### Q: Does printing test labels cost anything?

A: No, printing test labels is completely free. However, please note that these labels are for testing purposes only and cannot be used for actual shipping. Misusing test labels for real shipments can result in serious consequences from your carrier, including the possibility of being blacklisted.

### Q: I want to test Parcelcraft from a purely API angle.

A: Parcelcraft creates test and production labels that integrate directly into the EasyPost API.
