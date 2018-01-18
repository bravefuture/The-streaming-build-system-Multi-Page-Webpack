
import '../sass/index.scss';
import $ from './lib/jquery-3.2.1.min.js';
import {utils} from './utils';

console.log(utils.secToHour(10000));
console.log($(window).height());

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}