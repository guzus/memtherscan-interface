# Memtherscan

**The next-gen crypto meme aggregator**

> Crypto memes in the palm of your hand

<img src="https://github.com/guzus/memtherscan/assets/50664161/535a0983-09ee-467b-bbd3-4db1f9173a65" width=400 />

## Development

Run on localhost

```
npm run dev
```

Deploy (using Vercel)

```
npm run deploy
```

## Infrastructure

- **Cloudflare R2**: Image, Video Storage
- **Firebase**: Database
- **GCP Cloud Run**: [API Server](https://github.com/guzus/memtherscan-server) (not open-source yet)
- **Github Actions, Github Pages**: [Frontend](https://github.com/guzus/memtherscan) Deployment
