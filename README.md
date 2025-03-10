# DevBites

## How to Install

```bash
# clone the repository and cd into it:
git clone https://github.com/ezeslucky/DevBites.git && cd DevBites

# copy the .env.example to .env and fill all env variables
cp .env.example .env

#   - `NEXT_PUBLIC_FIREBASE_API_KEY` : Firebase API Key
#   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` : Firebase Auth Domain
#   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID` : Firebase Project ID
#   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` : Firebase Storage Bucket
#   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` : Firebase Messaging Sender ID
#   - `NEXT_PUBLIC_FIREBASE_APP_ID` : Firebase App ID
#   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` : Firebase Measurement ID
#   - `NEXT_PUBLIC_NOTCH_PAY_API_URL` : Notch Pay API URL
#   - `NEXT_PUBLIC_NOTCH_PAY_PUBLIC_KEY` : Notch Pay Public Key
#   - `NEXT_PUBLIC_NOTCH_PAY_PRIVATE_KEY` : Notch Pay Private Key
#   - `NEXT_PUBLIC_NOTCH_PAY_PUBLIC_KEY_TEST` : Notch Pay Public Key Test
#   - `NEXT_PUBLIC_ALGOLIA_APP_ID` : Algolia App ID
#   - `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY` : Algolia Search Key
#   - `NEXT_PUBLIC_ALGOLIA_ADMIN_KEY` : Algolia Admin Key
#   - `NEXT_PUBLIC_ALGOLIA_USAGE_KEY` : Algolia Usage Key
#   - `NEXT_PUBLIC_LINK_PREVIEW_KEY` : Link Preview Key
#   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` : Recaptcha Site Key
#   - `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` : Recaptcha Secret Key

# Install dependencies:
npm install

# build and start
npm run build

# or on dev mode
npm run dev
```

## Usage

The application is accessible at http://localhost:3000/.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a branch for your contribution with `git checkout -b my_new_feature`.
3. Make your changes.
4. Submit a pull request on master branch.
