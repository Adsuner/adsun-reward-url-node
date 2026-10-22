# Adsun Reward URL — Node.js (Express) server example

Server-side reward verification endpoint for Adsun's **Reward URL** callback. Rewards with real value should only be granted here, never in the browser.

Set the Reward URL in the panel to:

```
https://your-domain.com/api/adsun-reward?userid=[userId]&block=[blockId]&ts=[timestamp]&key=YOUR_SECRET
```

## Run

```bash
cp .env.example .env   # edit the key
npm install
npm start
```

Replace `YOUR_BLOCK_ID` with the block ID from your Adsun publisher panel.

## Debug mode

`debug: true` shows a test ad: no billing, and the Reward URL is **not** called.
Use it outside Telegram too (otherwise you get `NoUserData`). Remove it before going live.

## Links

- Docs: https://adsun.io/documentation
- Mini App monetization: https://adsun.io/telegram-mini-app-monetization

## License

MIT
