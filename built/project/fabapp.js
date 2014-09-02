//     Fabapp
//     (c) simonfan
//     Fabapp is licensed under the MIT terms.

define(["require","exports","module","fabapp/view/display","fabapp/view/base","text!fabapp/index.html"],function(e,t,n){e("fabapp/view/display");var r=e("fabapp/view/base"),i=r.extend({initialize:function(t){r.prototype.initialize.call(this,t)},template:e("text!fabapp/index.html")});n.exports=i});