import { vertaal } from './xml2abc.cjs';
import { transposeABC } from 'abc-notation-transposition';

export function convertMusicXmlToAbc(xmlString, options) {
  const xmlDocument = new window.DOMParser().parseFromString(xmlString, 'text/xml');
  const parserErrorElement = xmlDocument?.getElementsByTagName('parsererror')[0];
  if (parserErrorElement ) {
    const errors = [...parserErrorElement.childNodes].map(el => el.textContent);
    throw new Error(`Parser errors:\n${errors.join('\n')}`);
  }

  const [result, errorMessage] = vertaal(xmlDocument, { p: '', b: 4, d: 4, ...options });
  if (!result) {
    throw new Error(errorMessage || 'Unknown error converting to ABC');
  }

  return { result, warningMessage: errorMessage || '' };
}

export function transposeAbc(abcCode, halfSteps, options) {
  return transposeABC(abcCode, halfSteps, options);
}
