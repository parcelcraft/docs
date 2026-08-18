# Set Up a Digital Scale

Connect a USB or serial digital scale to your computer to measure the weight of your packages in the Parcelcraft app. Parcelcraft integrates a tool from PrintNode to facilitate the connection between your digital scale and your browser window. To get it working, you'll need to:

- Connect a supported scale to your computer
- Create a PrintNode account and obtain a PrintNode API key
- Install the PrintNode Client on your computer
- Select your scale in the Parcelcraft settings

## Before You Begin

Make sure your digital scale is supported. See [supported scales](https://www.printnode.com/en/docs/supported-scales).

## Create a PrintNode account and install the PrintNode client software

1. Create an account with [PrintNode](https://app.printnode.com/login/register). The free tier allows the usage of their PrintNode client with scales at no charge.
2. Create a [PrintNode API key](https://api.printnode.com/app/apikeys).
3. Install the [PrintNode Client](https://www.printnode.com/en/download) on your computer or as a web service.
4. Connect your scale. See [Reading Scales Over the Internet](https://www.printnode.com/en/docs/reading-usb-scales-over-the-internet) for more setup instructions.

## Select your scale in the Parcelcraft settings

1. In Stripe, open the Parcelcraft app settings:
    ![Stripe App Settings](https://dev.parcelcraft.com/wp-content/uploads/2023/09/app-settings-link.png)
2. Browse to the Printers & Digital Scales tab in the Parcelcraft settings.
3. Enable the Digital Scales option and enter your PrintNode API Key. If your PrintNode client has been installed, you will be able to select your computer and then your digital scale.
4. Test the scale to make sure everything is working.

## Troubleshooting

Some scales may not reconnect after they are disconnected from your computer. To reconnect your scale, open your PrintNode Client and click **Refresh** under the scales tab.
![How to Refresh a Digital Scale](https://dev.parcelcraft.com/wp-content/uploads/2023/09/refresh-scales.png)
