# Automatically print labels sent to your email

Parcelcraft can email every label and form file to an address of your
choosing as an attachment. Pair that with a printer or tool that
automatically prints incoming attachments, and your labels print themselves
without a print dialog.

> Note: Printing to email is not our recommendation. Instead, use the
> [PrintNode](/docs/enable-1-click-shipping/setup-printnode-account) option for
> easier setup. PrintNode allows up to 50 free prints per month and offers
> reasonable prices for additional quantities.

## Turn on print to email

1. Go to the [Parcelcraft settings page](https://dashboard.stripe.com/settings/apps/com.productivity.parcelcraft)
   and click the **Printers & digital scale** tab.
2. Toggle on **Send as attachment in email**.
3. Enter the address in the **Email labels to:** field — it's prefilled
   with your Stripe dashboard email address.

If packing slips are enabled in your print settings, they're attached too
(packing slips are only supported for labels created from an invoice).

## Tools to automatically print email attachments

There are several tools that can help you automatically print attachments
arriving at your email address:

- If you use Outlook, refer to [How to Print Incoming Mail Automatically in Outlook](https://www.lifewire.com/automatically-print-incoming-mail-outlook-1173140).

- If you have an HP Printer, use [HPSmart](https://www.hpsmart.com/). See [How do I ePrint?](https://www.hpsmart.com/us/en/cms/HPC/ePrint)

- Use Automatic Email Manager 6. See [Automatically Print Your Emails with Attachments](https://www.automatic-email-manager.com/feature-print-email-body-and-attachments).

Both labels and forms are sent to the same email address, and the emails
come from **@parcelcraft.com** addresses. If you use one printer for labels
and another for customs forms, create rules in your email client that
forward each email to the correct printer's address based on the subject
line of the email you receive from Parcelcraft.

After setting up your printer to receive email attachments, print a
[test label](/docs/getting-started/print-test-label) to confirm the email
arrives and your printer picks it up.

> Note: When you create return labels, you'll have the option to email
> labels directly to your customers. The settings here do not apply to
> customer return label emails.
