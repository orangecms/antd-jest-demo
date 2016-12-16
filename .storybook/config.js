import { configure } from '@kadira/storybook';
import 'antd/dist/antd.css';

const stories = require.context('../src/components', true, /story\.jsx$/);
configure(() => stories.keys().forEach(stories), module);
