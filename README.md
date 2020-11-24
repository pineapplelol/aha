<div>
<img align="left" width="150" height="150" src="https://pineapple.lol/asset/fronz.png">

# aha

A tool to find inspiration for project names. Search a relevant word, and aha will show you similar words, and the same word in other languages. Visit at [aha.pineapple.lol](http://aha.pineapple.lol).

</div>

## Technology

Built with [React](https://reactjs.org/) using [Ant Design](https://ant.design/) components.

Uses [ESLint](https://eslint.org) with [Prettier](https://prettier.io/) and the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript).

Uses [Flow](https://flow.org/) type checking.

### APIs

- [Merriam-Webster Dictionary](https://dictionaryapi.com/) – for word definitions
- [DataMuse](http://www.datamuse.com/api/) – for word synonyms
- [Microsoft Translator](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/) – for word translations

## Usage

Live project deployed at [aha.pineapple.lol](http://aha.pineapple.lol).

### Running Locally

Clone this repository and `yarn && yarn start`. Visit [http://localhost:3000](http://localhost:3000) in your browser. API's will not work until you create a `.env` file with follow components:

- `REACT_APP_MS_TRANSLATE` from [Microsoft Translator](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/)
- `REACT_APP_MW_API_KEY` from [Merriam-Webster Dictionary](https://dictionaryapi.com/)

### Code Quality

To lint, `yarn lint`, and for flow type checking, `yarn flow`.

## Partners

<a href="https://vercel.com?utm_source=pineapplelol&utm_campaign=oss"><img style="padding-top: 15px; width: 150px;" src="public/powered-by-vercel.svg" /></a>
