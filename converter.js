const correctEmail = 'pedanahid0@gmail.com';
const correctPassword = 'Nahid@20087';

const hashMapping = {
           'A': '19B5', 'B': '3F92', 'C': '4H88', 'D': '5J71', 'E': '67K3', 'F': '78L6', 'G': '8M20', 'H': '9N45', 'I': '0P69',
           'J': '1Q98', 'K': '2R43', 'L': '3S85', 'M': '4T70', 'N': '5U91', 'O': '6V34', 'P': '7W67', 'Q': '8X12', 'R': '9Y04',
           'S': '0Z56', 'T': '11A2', 'U': '22B5', 'V': '33C7', 'W': '44D9', 'X': '55E8', 'Y': '66F1', 'Z': '77G3',
           'a': '88H6', 'b': '99I4', 'c': '00J5', 'd': '11K7', 'e': '22L9', 'f': '33M1', 'g': '44N8', 'h': '55O2', 'i': '66P3',
           'j': '77Q5', 'k': '88R9', 'l': '99S0', 'm': '00T6', 'n': '11U3', 'o': '22V4', 'p': '33W8', 'q': '44X1', 'r': '55Y9',
           's': '66Z0', 't': '77A3', 'u': '88B2', 'v': '99C1', 'w': '00D7', 'x': '11E4', 'y': '22F5', 'z': '33G0',
           '0': 'AB12', '1': 'CD34', '2': 'EF56', '3': 'GH78', '4': 'IJ90', '5': 'KL21', '6': 'MN43', '7': 'OP65', '8': 'QR87', '9': 'ST09',
           '@': '06N3', '#': 'VB78', '&': 'AK55', '*': 'LM21', '"': 'XY34', "'": 'ZQ56', '.': 'JK78', ':': 'MN90', ';': 'PQ12',
           '!': 'RS34', '%': 'TU56', '(': 'VW78', ')': 'XY90', '-': 'AB23', '+': 'CD45', '/': 'EF67', '?': 'GH89', '^': 'IJ01', '=': 'KL23',
           '{': 'MN45', '}': 'OP67', '[': 'QR89', ']': 'ST01', '<': 'UV23', '>': 'WX45', '|': 'YZ67', '\\': 'AB01', '`': 'CD12', '~': 'EF34'
       };

function login() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (email === correctEmail && password === correctPassword) {
        document.getElementById("loginMessage").textContent = "Login successful!";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("converterSection").style.display = "block";
        document.getElementById("loginHeading").style.display = "none";
    } else {
        document.getElementById("loginMessage").textContent = "Incorrect email or password. Please try again.";
    }
}

function convertTextToHash() {
    const text = document.getElementById("textInput").value;
    let hash = '';

    for (let char of text) {
        hash += hashMapping[char] ? hashMapping[char] + '.' : '[UNK].';
    }

    hash = hash.slice(0, -1);
    document.getElementById("hashOutput").value = hash;
}

function convertHashToText() {
    const hash = document.getElementById("hashInput").value.split('.');
    let text = '';

    for (let hashValue of hash) {
        const foundKey = Object.keys(hashMapping).find(key => hashMapping[key] === hashValue);
        text += foundKey ? foundKey : '[UNK]';
    }

    document.getElementById("textOutput").value = text;
}

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
}
