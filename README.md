# serialize-data-package

A TypeScript/JavaScript package to serialize data by removing methods and non-serializable properties.

## Installation

```bash
npm install serialize-data-package
```

## Usage

```typescript
import { serializeData } from 'serialize-data-package';

const data = [
  { id: 1, name: 'John', sayHello: () => console.log('Hello') },
  { id: 2, name: 'Jane', symbol: Symbol('test') }
];

const serializedData = serializeData(data);
console.log(serializedData);
// Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```

## API

### serializeData(datas: any[]): any[]

Serializes an array of data objects by removing methods and non-serializable properties.

- `datas` (Array): The array of data objects to serialize.
- Returns: (Array) The array of serialized data objects.

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/umute3d/serialize-data-package/issues).

## Show your support

Give a ⭐️ if this project helped you!