```javascript
import {convertPounds} from '@stak-digital/units/pounds';

// Option 1
convertPounds(160).toKilograms();
    // returns 72.57
    
// Option 2
convertPounds(160).to('kg');
    // returns 72.57
    
// Option 3
convertPounds(160).kilograms;
    // returns 72.57
    
// With option 1...

function convertPounds(pounds) {
    return {
        toKilograms() {
            return pounds * 0.45;
        }
    }
}

// Option 2 is my least favourite because it's magic strings and results in lots of different branches in a single function (`to`)

// With option 3...

function convertPounds(pounds) {
    return {
        get kilograms() {
            return pounds * 0.45;
        }
    }
}
```