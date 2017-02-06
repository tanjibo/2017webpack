var greeter = require('./Greeter.js');
import 'jquery';
require('./style.css');
require('./index.less');
let a='aaaa';
import Vue from 'vue';

let vue=new Vue({
	el:'#root',
	data:{
		message:'dddd'
	}
})
console.log(vue);
// $('body').find('#root').html('你好啊');
// document.getElementById('root').appendChild(greeter());