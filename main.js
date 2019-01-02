function note(){
        const remote = require('electron').remote;
        const BrowserWindow = remote.BrowserWindow;
        let win = new BrowserWindow({ width: 350, height: 375, icon:'playork.png',backgroundColor: '#FFFF00', title: "Playork Sticky Notes", frame: false, nodeIntegration: true})
        win.loadURL(`file://${__dirname}/note.html`)
        win.on('ready-to-show', function() { 
        win.show(); 
        win.focus();
        });
    };
$('.yellow').click(function() {
                $('#titlebar').css('background', '#cccc00');
                $('#lightYellow').css('background', '#FFFF00');
});
$('.green').click(function() {
                $('#titlebar').css('background', '#8bff64');
                $('#lightYellow').css('background', '#bef39e');
});
$('.blue').click(function() {
                $('#titlebar').css('background', '#4035ff');
                $('#lightYellow').css('background', '#5b60f4');              
});
$('.pink').click(function() {
                $('#titlebar').css('background', '#e930c9');
                $('#lightYellow').css('background', '#e182df');
});
$('.gray').click(function() {
                $('#titlebar').css('background', '#aaa');
                $('#lightYellow').css('background', '#ccc');
});
$('.dark').click(function() {
                $('#titlebar').css('background', '#444');
                $('#lightYellow').css('background', '#777');
});
var BackgroundClass = Quill.import('attributors/class/background');
var ColorClass = Quill.import('attributors/class/color');
var SizeStyle = Quill.import('attributors/style/size');
SizeStyle.whitelist = ['10px', '18px', '27px', '37px'];
Quill.register(BackgroundClass, true);
Quill.register(ColorClass, true);
Quill.register(SizeStyle, true);
var Font = Quill.import('formats/font');
Font.whitelist = ['lobster', 'comicsans'];
Quill.register(Font, true);
var quill = new Quill('#editor', {
  modules: {
    toolbar: [
      [{ font: ['', 'lobster', 'comicsans'] }, { size: ['10px', '18px', '27px', '37px'] }, 'bold', 'italic', 'underline','strike', {color:['black','white','red','orange','yellow','green','blue','purple']}, {background:['black','white','red','orange','yellow','green','blue','purple']},{list: 'bullet'},{list: 'ordered'},{ align: '' },{align: 'center'},{align: 'right'},'clean','image','video']
    ]
  },
  theme: 'snow'
});
//Below is not finished don't uncomment this if you don't know what it is
/*const Store = require('electron-store');
const store = new Store();
quill.on('text-change', function() {
  const text = quill.root.innerHTML;
  const saveit = {"first":text};
  store.set('save',saveit);
});
const item = store.get('save')
text = item.first*/
$('*').on('click focusin', function () {
  $('#titlebar').css('height', '32px');
  $('#titlebar').css('transition', 'height 0.1s ease-in-out');
  $('#titlebar span').css('display', 'flex');
  $('#color').css('height', '40px');
  $('#color').css('transition', 'height 0.1s ease-in-out');
  $('.ql-snow .ql-editor').css('height', '100%').css('height', '-=110px');
  $(".ql-snow .ql-editor").attr('style', 'margin-bottom: 40px !important');
  $('.ql-snow .ql-editor').css('transition', 'height 0.1s ease-in-out');
  $('.ql-snow.ql-toolbar').show()
});
$('*').on('blur focusout', function () {
  $('#titlebar').css('height', '25px');
  $('#titlebar').css('transition', 'height 0.1s ease-in-out');
  $('#titlebar span').css('display', 'none');
  $('#color').css('height', '0');
  $('#color').css('transition', 'height 0.1s ease-in-out');
  $('.ql-snow .ql-editor').css('height', '100%');
  $(".ql-snow .ql-editor").attr('style', 'margin-bottom: 0 !important');
  $('.ql-snow .ql-editor').css('transition', 'height 0.1s ease-in-out');
  $('.ql-snow.ql-toolbar').hide()
});
function newColor()
{
  var titleColor = document.getElementById('color1').value;
  var backColor = document.getElementById('color2').value;
  $('#titlebar').css('background', titleColor);
  $('#lightYellow').css('background', backColor);
  $('.choosecolor').css('display', 'none');
};
$('.colors').on('click', function(){
  $('.choosecolor').css('display', 'block');
});
function cancel()
{
  $('.choosecolor').css('display', 'none');
};
function option(){
  $('.options').css('display', 'block');
};
function closeoption(){
  $('.options').css('display', 'none');
};
var colorselection = document.getElementById('colorselection')
var color = document.getElementById('color')
if (colorselection.checked == true){
  $('#color').show();
} else {
  $('#color').hide();
}