var breakz=document.createElement('div');
  document.body.appendChild(breakz);
  breakz.className='breakz';

function Fighter(real_name, nick_name, pic1, pic2, stats, orgs, wclass, weight_height, country, lyt_clip_number) {
  this.real_name=real_name;
  this.name=nick_name;
  this.pic1=pic1;
  this.pic2=pic2;
  this.stats=stats;
  this.orgs=orgs;
  this.wclass=wclass;
  this.weight_height=weight_height;
  this.country=country;
  this.lyt_clip_number=lyt_clip_number;
  
 
var ow=document.createElement('div');
  document.body.appendChild(ow);
  ow.className='outer_wrapper';
  ow.id='outer_wrapper_id';
  //ow.innerHTML='test';
  
var tb=document.createElement('div');
  document.body.appendChild(tb);
  tb.className='top_blind';
  tb.id='top_blind_id';
  
var prevFighter=document.createElement('button');
  tb.appendChild(prevFighter);
  prevFighter.className='fight_button';
  prevFighter.id='prev_fighter_id';
  prevFighter.innerHTML='- Previous Fighter -';
  prevFighter.setAttribute('onclick','prevFighter()');
  
var nextFighter=document.createElement('button');
  tb.appendChild(nextFighter);
  nextFighter.className='fight_button';
  nextFighter.id='next_fighter_id';
  nextFighter.innerHTML='- Next Fighter -';
  nextFighter.setAttribute('onclick','nextFighter()');
  
var newline=document.createElement('br');
  tb.appendChild(newline);
  
var firstFighter=document.createElement('button');
  tb.appendChild(firstFighter);
  firstFighter.className='fight_button';
  firstFighter.id='first_fighter_id';
  firstFighter.innerHTML='- First Fighter -';
  firstFighter.setAttribute('onclick','firstFighter()');
  
var lastFighter=document.createElement('button');
  tb.appendChild(lastFighter);
  lastFighter.className='fight_button';
  lastFighter.id='last_fighter_id';
  lastFighter.innerHTML='- Last Fighter -';
  lastFighter.setAttribute('onclick','lastFighter()');
  
tb.appendChild(newline);
  

  
var upz=document.createElement('img');
  tb.appendChild(upz);
  upz.src='https://heller.brandeis.edu/design-home/graphics/uparrow-black.png';
  upz.className='arrowz_class';
  upz.id='up_arrow_id';
  upz.width='550';
  upz.height='60';
  
  
var bb=document.createElement('div');
  document.body.appendChild(bb);
  bb.className='btm_blind';
  bb.id='btm_blind_id';
  
var dwnz=document.createElement('img');
  bb.appendChild(dwnz);
  dwnz.src='https://heller.brandeis.edu/design-home/graphics/uparrow-black.png';
  dwnz.className='arrowz_class';
  dwnz.id='dwn_arrow_id';
  dwnz.width='550';
  dwnz.height='60';
  
var scrollFighter=document.createElement('button');
  tb.appendChild(scrollFighter);
  scrollFighter.className='fight_button';
  scrollFighter.id='scroll_fighter_id';
  scrollFighter.innerHTML='- Scroll Fighters List -';
  scrollFighter.setAttribute('onclick','scrollFighter()');
  
  
var clickFighter=document.createElement('button');
  tb.appendChild(clickFighter);
  clickFighter.className='fight_button';
  clickFighter.id='click_fighter_id';
  clickFighter.innerHTML='- Click Fighters List -';
  clickFighter.setAttribute('onclick','clickFighter()');  
  
var ifrm=document.createElement('iframe');
  document.body.appendChild(ifrm);
  ifrm.src='';
  ifrm.id='response_iframe_id';
  ifrm.className='response_iframe_class';
  
var ofb=document.createElement('div');
  ow.appendChild(ofb);
  ofb.className='outer_fighter_box';  

var info_div = document.createElement('div');
ow.appendChild(info_div);
  //info_div.innerHTML = name;
  info_div.className='info_div';
  info_div.id='info_div';
  
var rn = document.createElement('div');
  info_div.appendChild(rn);
  rn.innerHTML = real_name;
  rn.className='real_name_div';
  rn.id=real_name;
  
var nnm = document.createElement('div');
  info_div.appendChild(nnm);
  nnm.innerHTML = '"' + nick_name + '"';
  nnm.className='nick_name_div';
  
var statz = document.createElement('div');
  info_div.appendChild(statz);
  statz.innerHTML = 'Status - ' + stats;
  statz.className='stats_div';
  var fight_status_color;
  if(stats=='Fighting'){fight_status_color='green';}
  else{fight_status_color='maroon';}
  
var orgz = document.createElement('div');
  info_div.appendChild(orgz);
  orgz.innerHTML = orgs;
  orgz.className='orgs_div';
  
var wgt_class = document.createElement('div');
  info_div.appendChild(wgt_class);
  wgt_class.innerHTML = wclass;
  wgt_class.className='wgt_class_div';
  
var wgt_hgt = document.createElement('div');
  info_div.appendChild(wgt_hgt);
  wgt_hgt.innerHTML = weight_height + 'lbs';
  wgt_hgt.className='weight_height_div';
  
var country_flag={
    USA:'https://www.countries-ofthe-world.com/flags/flag-of-United-States-of-America.png',
    Ireland:'https://www.countries-ofthe-world.com/flags/flag-of-Ireland.png',
    Belarus:'https://www.countries-ofthe-world.com/flags/flag-of-Belarus.png',
    Netherlands:'https://www.countries-ofthe-world.com/flags/flag-of-Netherlands.png'
    
  };
  
var coun = document.createElement('div');
  info_div.appendChild(coun);
  coun.innerHTML = country;
  coun.className='country_div';
var coun_flag_img = document.createElement('img');
  info_div.appendChild(coun_flag_img);
  coun_flag_img.src=country_flag[country];
  coun_flag_img.className='coun_flag_img';
  coun_flag_img.title=country;
  coun_flag_img.alt=country;
  
var picA=document.createElement('img');
  ofb.appendChild(picA);
  picA.src=pic1;
  picA.className='pic_wrap'; 
  picA.title=real_name;
  picA.alt=real_name;
  picA.addEventListener('mouseover', function(){    
    //if(fighter.hasOwnProperty('lyt_clip_number')){lyt(vidz(lyt_clip_number));}
    picA.src=pic2;
    rn.style.color='red';
    nnm.style.color='black';
    statz.style.color=fight_status_color;
    ow.style.borderColor='silver';
    info_div.style.borderColor='silver';});  
  picA.addEventListener('mouseout', function(){
    picA.src=pic1;
    rn.style.color='black';
    nnm.style.color='darkblue';
    statz.style.color='gray';
  ow.style.borderColor='gray';
  info_div.style.borderColor='black';});
  
  picA.addEventListener('dblclick', function(){    
    if(fighter.hasOwnProperty('lyt_clip_number')){lyt(vidz(lyt_clip_number));}
  });
  
}//end of constructor function

//template
/*
var fighter = new fighter(
  '',//real_name
  '',//name
  '',//pic1
  '',//pic2
  '',//stats
  '',//orgs
  '',//class
  '',//weight_height
  ''//country
  );
 */

var fighter = new Fighter(
  /*real_name*/'Kevin Ferguson',
  /*nick_name*/'Kimbo Slice',
  /*pic1*/'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjg93TuuzpcHO51lw_JT-5jzZ7qVi0jsZURnvXzMUj-PmloC1sYQ',
  /*pic2*/'https://usatmmajunkie.files.wordpress.com/2015/01/kevin-kimbo-slice-ferguson-tuf-10.jpg?w=1000',
  /*stats*/'Deceased',
  /*orgz*/'UFC/Bellator/Streets',
  /*class*/'Heavyweight',
  /*weight*/'6\'2" - 225',
  /*country*/'USA',
  /*lyt_clip_number*/'0'
);

var fighter = new Fighter(
  'Conor McGregor',//real_name
  'The Notorious',//nick_name
  'http://1.bp.blogspot.com/-4vCvmVFHpmA/VrHyPIa49LI/AAAAAAAABG0/a4AVV_1mw5A/s1600/CONOR%2Bperfil.png',//pic1
  'http://i.dailymail.co.uk/i/pix/2015/12/08/00/2F27A21600000578-3350251-image-a-34_1449534306795.jpg',//pic2
  'Fighting',//stats
  'UFC/CWFC',//orgs
  'Welterweight',//class
  '5\'9" - 170',//weight_height
  'Ireland',//country
  '1'
  );

var fighter = new Fighter(
  'Brock Lesnar',//real_name
  '---',//nick_name
  'http://a.fssta.com/content/dam/fsdigital/fscom/Buzzer/Images/2016/01/12/011216-UFC-Brock-Lesnar-LN-PI.vresize.1200.675.high.59.jpg',//pic1
  'http://www.wrestlezone.com/assets/uploads/2015/11/brock-lesnar-2.jpg',//pic2
  'Suspended',//stats
  'UFC',//orgs
  'Heavyweight',//wclass
  '6\'3" - 265',//weight_height
  'USA',//country
  '2'
  );

var fighter = new Fighter(
  'Alistair Overeem',//real_name
  'The Reem',//nick_name
  'http://www.alistairovereem.com/files/fighter/alistair-overeem.png',//pic1
  'http://media.ufc.tv/fighter_images/Alistair_Overeem/OVEREEM_ALISTAIR.png',//pic2
  'Fighting',//stats
  'UFC/Pride/K1',//orgs
  'Heavyweight',//wclass
  '6\'5" - 257',//weight_height
  'Netherlands',//country
  '3'
  );

var fighter = new Fighter(
  'Andrei Arlovski',//real_name
  'The Pitbull',//nick_name
  'http://www.alistairovereem.com/files/fighter/andrei_arlovski.png',//pic1
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxNAjT-wBLuIk8j-L7iMyHyuAvLSkcHzQmwWBJWkUYIBnQB6li',//pic2
  'Fighting',//stats
  'UFC',//orgs
  'Heavyweight',//wclass
  '6\'4" - 248',//weight_height
  'Belarus'//country
  );

var fighter = new Fighter(
  'Nick Diaz',//real_name
  '---',//nick_name
  'http://talkingbrawlsmma.com/wp-content/uploads/2014/07/NickDiaz_Headshot.png',//pic1
  'http://insidestl.com/wp-content/uploads/2016/03/Nick-Diaz-middle-fingers.jpg',//pic2
  'Fighting',//stats
  'UFC/Pride',//orgs
  'Welterweight',//class
  '6\'0" - 170',//weight_height
  'USA'//country
  );

var fighter = new Fighter(
  'Nate Diaz',//real_name
  '---',//nick_name
  'http://vegnews.com/web/uploads/asset/7312/file/VegNews.NateDiaz.png',//pic1
  'http://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2335679.png&w=350&h=254',//pic2
  'Fighting',//stats
  'UFC',//orgs
  'Welterweight',//class
  '6\'0" - 170',//weight_height
  'USA'//country
  );


  
  var fighter = new Fighter(
  'Tony Ferguson',//real_name
  'El Cucuy',//nick_name
  'http://17r1l63fshd52dy9yakdizhkog.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/Tony-Ferguson-645x370.jpg',//pic1
  'http://mmasucka.com/wp-content/uploads/2014/03/tony-ferguson_ufc.jpg',//pic2
  'Fighting',//stats
  'UFC',//orgs
  'Lightweight',//class
  '5\'11" - 155',//height_weight
  'USA'//country
  );


  
  var fighter = new Fighter(
  'Rafael dos Anjos',//real_name
  'RDA',//nick_name
  'http://cdn.torcedores.com/content/uploads/2015/03/Dos-Anjos.png',//pic1
  'http://vip.abril.com.br/blogs/clube-da-luta-vip/wp-content/uploads/sites/111/2015/03/Rafael-dos-Anjos.jpeg',//pic2
  'Fighting',//stats
  'UFC',//orgs
  'Lightweight',//class
  '5\'8" - 155',//weight_height
  'Brazil'//country
  );

  var fighter = new Fighter(
  'Chael Sonnen',//real_name
  'The American Gangster',//nick_name
  'http://media.ufc.tv/fighter_images/Chael_Sonnen/ChaelSonnen_Headshot.png',//pic1
  'http://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2335796.png&w=350&h=254',//pic2
  'Fighting',//stats
  'UFC/Bellator/WEC',//orgs
  'Middleweight',//class
  '6\'1" - 185',//weight_height
  'USA',//country
  '9'
  );

/*
  
  var fighter = new Fighter(
  '',//real_name
  '',//nick_name
  '',//pic1
  '',//pic2
  '',//stats
  '',//orgs
  '',//class
  '',//weight_height
  ''//country
  );
  
  var fighter = new Fighter(
  '',//real_name
  '',//nick_name
  '',//pic1
  '',//pic2
  '',//stats
  '',//orgs
  '',//class
  '',//weight_height
  ''//country
  );
*/

//Fighter count

var fighter_count=document.querySelectorAll('.outer_wrapper').length;//fighter_count by counting all fighter divs constructed at the end of JS - IE9+

var fighter_count_div=document.createElement('div');
document.body.appendChild(fighter_count_div);
fighter_count_div.id='fighter_count_div';
fighter_count_div.innerHTML=fighter_count + ' - Fighters Listed';

var column_pic_1=document.createElement('img');
document.body.appendChild(column_pic_1);
column_pic_1.src='http://shop.columns.com/images/Columns/Detail/105-architectural-wood-column-roman-doric-fluted-chadsworth-columns.jpg';
column_pic_1.id='column_pic_id_1';
column_pic_1.width='100';
column_pic_1.height='800';

var column_pic_2=document.createElement('img');
document.body.appendChild(column_pic_2);
column_pic_2.src='http://shop.columns.com/images/Columns/Detail/105-architectural-wood-column-roman-doric-fluted-chadsworth-columns.jpg';
column_pic_2.id='column_pic_id_2';
column_pic_2.width='100';
column_pic_2.height='800';

var breakz2=document.createElement('div');
  document.body.appendChild(breakz2);
  breakz2.className='breakz2';


var vid=[];//dvt=delay_visible_time, evt=end_visible_time - pass in a 2nd argument of 'v0' for 'no-video' for audio only zindex hiding iframe
//I would like to also write no-video into the array/object parameters instead of currently only being able to pass it thru arguments[]
//vid[#]={vid_info:'', dvt:0, evt:0};//template for info

vid[0]={vid_info:'pddLUjCO7HI?start=117&end=117', dvt:1600, evt:3585};//Kimbo
vid[1]={vid_info:'jChtC6kNLXI?start=18&end=25', dvt:0, evt:6200};//Conor
vid[2]={vid_info:'LHgx52KBY6s?start=1140&end=1145', dvt:1600, evt:6242};//Lesnar
vid[3]={vid_info:'DVOIxvaaOSw?start=03&end=12', dvt:900, evt:9000};//Overeem
vid[9]={vid_info:'S3ubnS4RQVg?start=03&end=31', dvt:4400, evt:29700};//Sonnen
vid[20]={vid_info:'GoCOg8ZzUfg?start=11&end=218',dvt:1000,evt:180000};//theme-can't be touched
vid[21]={vid_info:'3eUpf4f8LEU?start=06&end=199',dvt:1000,evt:180000};//theme-face the pain-ufc
vid[22]={vid_info:'QT5OLGYA9a4?start=06&end=264',dvt:1000,evt:264000};//theme-fedor- Enae Volare Mezzo - eRa
vid[23]={vid_info:'u94qXjChoqY?start=06&end=245',dvt:1000,evt:245000};//theme - requiem for a dream - lotr



/*
var media_url = [];
media_url[1]='https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif';//clapping
media_url[2]='http://33.media.tumblr.com/c85db198e229666cce94d3b1e3e8c067/tumblr_msjr0z1PmG1sgl0ajo1_500.gif';
*/

IDx = function(id) { //part of the IDz library i made - instead of $ / jquery
  return document.getElementById(id);
};

function vidz(vid_number){
      var first_part='https://www.youtube.com/embed/';
      var end_part='&autoplay=1&showinfo=0&controls=0&autohide=1&disablekb=1&fs=0';  
      whole_url = first_part + vid[vid_number].vid_info + end_part;
      return vid_number;
      //console.log(whole_url);
}

// Vid - Launcher Youtube - "lyt"=LaunchYouTube
function lyt(vid_number) { //reusable for all - just pass in array index of lyt(vidz(4),'v0'), a 2nd argument 'v0' single quoted
  IDx('response_iframe_id').style='z-index:2;width:500px;height:300px';//resets iframe css incase it was altered when 'v0' was passed - no-video
  if(arguments[1]==='v0'){//check if there is a 2nd argument passed--if it is 'v0' 'video 0/video off/sound on' then do something..
    IDx('response_iframe_id').style='z-index:-4;position:absolute;top:250px;left:125px;width:0;height:0';//hide visible part of video clip
  }
  IDx('response_img_id').style.display = 'none'; /*clear img in the same spot if it is still playing-so they dont collide*/
  IDx('response_iframe_id').src = whole_url;
  setTimeout(action_after_delay_timer1, vid[vid_number].dvt); //delay before displaying iframe to not show vid load-also set back start vid time in youtube url to not miss anything
  function action_after_delay_timer1() {
    IDx('response_iframe_id').style.display = 'inline';
    //IDx('response_iframe_id').style.zIndex = '2';
  }
  setTimeout(timerGo_vid, vid[vid_number].evt); //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_vid() {
    IDx('response_iframe_id').src = ''; //makes iframe suddenly have no src turning to black background css
    IDx('response_iframe_id').style.display = 'none'; //makes iframe disappear abruptly
  }
}

//Pic_launcher
function limg(delay_start_timer_value, pic_url, shutoff_timer_value) { //reusable for all - just pass in array index of pic_url_array, and timer_value 
  //clearTimeout(myTimer_var);
  console.log(delay_start_timer_value);
  console.log(shutoff_timer_value);

  IDx('response_img_id').src = pic_url;
  setTimeout(action_after_delay_timer2, delay_start_timer_value); //delay before displaying pic to not show pic load-leftover copy from vid load feature

  function action_after_delay_timer2() {
    IDx('response_iframe_id').style.display = 'none';
    IDx('response_img_id').style.display = 'inline';
  }
  setTimeout(timerGo_pic, shutoff_timer_value); //vid close.. display off timer -- looks for timer value passed into function

  function timerGo_pic() {
    IDx('response_img_id').style.display = 'none'; //makes img disappear abruptly
  }
}

var now_scroll=0;

function prevFighter(){
    var whereScroll=document.body.scrollTop;      
    if(now_scroll=='0'){
      now_scroll=(fighter_count-1)*228;
      window.scrollTo(0,now_scroll);
      now_scroll=document.body.scrollTop;
    }
    else if(whereScroll==(fighter_count-1)*228){
      now_scroll=(fighter_count-1)*228-228;
      window.scrollTo(0,now_scroll-228);
      now_scroll=document.body.scrollTop;
    }
    else{
      now_scroll=now_scroll-228;
      window.scrollTo(0,now_scroll);
      now_scroll=document.body.scrollTop;
    }
}

function nextFighter(){
    var whereScroll=document.body.scrollTop;    
    if(whereScroll=='0'){
      now_scroll=now_scroll+228;
      window.scrollTo(0,now_scroll);
      now_scroll=document.body.scrollTop;
    }
    else if(whereScroll>=(fighter_count-1)*228){/*if at end of list or scrolled past end*/
      window.scrollTo(0,0);
      now_scroll=0;
      now_scroll=document.body.scrollTop;
    }
    else{
      now_scroll=now_scroll+228;
      window.scrollTo(0,now_scroll);
      now_scroll=document.body.scrollTop;
    }    
}

function firstFighter(){
    window.scrollTo(0,0);
    now_scroll=0;
  }
  
function lastFighter(){
    now_scroll=(fighter_count-1)*228;
    window.scrollTo(0,now_scroll);
    now_scroll=(fighter_count-1)*228;
  }

function scrollFighter(){
  document.body.style.overflow='auto';
  /*
  
  var newButn=document.createElement('button');
  newButn.id='prev_fighter_id';
  newButn.setAttribute('disabled','false');
  document.getElementById('top_blind_id').appendChild('newButn');
  
  var prevFighter2=document.getElementById('prev_fighter_id');
  var parentButton=prevFighter2.parentNode;
  parentButton.replaceChild(newButn, prevFighter2);
  */
}

function clickFighter(){
  window.scrollTo(0,0);
  now_scroll=0;
  document.body.style.overflow='hidden';
  /*
  document.getElementById('prev_fighter_id').removeAttribute('disabled');
  document.getElementById('next_fighter_id').removeAttribute('disabled');
  document.getElementById('first_fighter_id').disabled='false';
  document.getElementById('last_fighter_id').disabled='false';
  document.getElementById('scroll_fighter_id').disabled='false';
  */
}

window.onload=function(){
  lyt(vidz(20),'v0');
};


