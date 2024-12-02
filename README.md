# abc-tools
Neues Dokument
## Usage

~~~js
import { convertMusicXmlToAbc, transposeAbc } from '@educandu/abc-tools';

// converts MusicXML to ABC code (with denominator 4)
const result1 = convertMusicXmlToAbc(xmlString, { d: 4 });

// transposes ABC code 2 half steps down
const result2 = transposeAbc(abcCode, -2);
~~~

## Sources

The source file `src/xml2abc.js` was written by Wim Vree (available [here](https://wim.vree.org/js/xml2abc-js_index.html)). This code is licensed under the [Lesser GNU General Public License](http://www.gnu.org/licenses/lgpl.html). Changes made compared to the original code are marked inside the code itself.

---

## OER learning platform for music

Funded by 'Stiftung Innovation in der Hochschullehre'

<img src="https://stiftung-hochschullehre.de/wp-content/uploads/2020/07/logo_stiftung_hochschullehre_screenshot.jpg)" alt="Logo der Stiftung Innovation in der Hochschullehre" width="200"/>

A Project of the 'Hochschule für Musik und Theater München' (University for Music and Performing Arts)

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_Hochschule_f%C3%BCr_Musik_und_Theater_M%C3%BCnchen_.png" alt="Logo der Hochschule für Musik und Theater München" width="200"/>

Project owner: Hochschule für Musik und Theater München\
Project management: Ulrich Kaiser
