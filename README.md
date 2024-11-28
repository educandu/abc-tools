# abc-tools

[![codecov](https://codecov.io/gh/educandu/abc-tools/branch/main/graph/badge.svg)](https://codecov.io/gh/educandu/abc-tools)

Tools for ABC code manipulation

## Prerequisites

* node.js ^20.0.0
* optional: globally installed gulp: `npm i -g gulp-cli`

The output of this repository is an npm package (`@educandu/abc-tools`).

## Installation

~~~
$ yarn add @educandu/abc-tools
~~~

## Usage

~~~js
import { convertMusicXmlToAbc, transposeAbc } from '@educandu/abc-tools';

const result1 = convertMusicXmlToAbc(xmlString); // converts MusicXML to ABC code
const result2 = transposeAbc(abcCode, -2); // transposes ABC code 2 half steps down
~~~

## Sources

The source file `src/xml2abc.js` was taken from [Michael Eskin's ABC Transcription Tools](https://michaeleskin.com/abctools/abctools.html) (the file on Github is [here](https://github.com/seisiuneer/abctools/blob/f1ee083350aba4ec40b9208851f47a5abdb7ad52/xml2abc.js)), which is basically a copy of the original code by Wim Vree (available [here](https://wim.vree.org/js/xml2abc-js_index.html)). This code is licensed under the [Lesser GNU General Public License](http://www.gnu.org/licenses/lgpl.html). All changes made compared to the original code are marked inside the code itself.

---

## OER learning platform for music

Funded by 'Stiftung Innovation in der Hochschullehre'

<img src="https://stiftung-hochschullehre.de/wp-content/uploads/2020/07/logo_stiftung_hochschullehre_screenshot.jpg)" alt="Logo der Stiftung Innovation in der Hochschullehre" width="200"/>

A Project of the 'Hochschule für Musik und Theater München' (University for Music and Performing Arts)

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_Hochschule_f%C3%BCr_Musik_und_Theater_M%C3%BCnchen_.png" alt="Logo der Hochschule für Musik und Theater München" width="200"/>

Project owner: Hochschule für Musik und Theater München\
Project management: Ulrich Kaiser
