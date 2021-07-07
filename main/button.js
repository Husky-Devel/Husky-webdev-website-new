frameRate(50);
cursor();
var maximum=86;
//max press amount
var winstsize=40;
var countdown=0;
var bomb=function(x,y){
strokeWeight(5);
ellipse(x,y+140,80,80);
stroke(0, 0, 0);
line(x,countdown+y+60,x,y+100);
stroke(255, 197, 5);
line(x,countdown+y+60,x+10,countdown+y+60);
line(x,countdown+y+60,x+10,countdown+y+50);
line(x,countdown+y+60,x-10,countdown+y+60);
line(x,countdown+y+60,x-10,countdown+y+50);
line(x,countdown+y+60,x,countdown+y+50);
line(x,countdown+y+60,x,countdown+y+70);
line(x,countdown+y+60,x+10,countdown+y+70);
line(x,countdown+y+60,x-10,countdown+y+70);
strokeWeight(1);
stroke(0, 0, 0);
};
var mouseplacewinst=20;

var num=1;
var number=210;
var noread=false;
var mousePressed=function(){
playSound(getSound("rpg/hit-clop"));
if(mouseX>100&&mouseX<300&&mouseY>100&&mouseY<300){
num+=1;
number=200;    
}
if(num===18&&mouseX>140&&mouseX<290&&mouseY>330&&mouseY<390){
noread=true;
}
};
fill(0, 0, 0);
var mouseReleased=function(){
number=210;
};
var thing=0;
var other=false;
var draw= function() {
if(thing===0){
other=true;
}
if(other===true){
thing+=5;
}
if(thing===255){
other=false;
}
if(other===false){
thing-=5;
}if(num!==89){
background(thing,thing/2,255-thing);
textSize(20);
text(num-1+" presses",170,320);
fill(thing/2,255-thing,thing);
ellipse(200,200,200,200);
ellipse(number,200,200,200);
fill(0);
textSize(40);
text("Button",number-50,210);
}
if(num===89){
text(num-1+" presses",160,270);
}
if(num===2){
text("Yep, its a button!",25,40);
}
if(num===3){
text(" except this one\n changes colors...",55,40);
}
if(num===4){
text("...really quickly!",65,40);
}
if(num>4){
noCursor();
}
if(num>5&&num<22){
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
}
if(num>24&&num!==88){
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
}
if(num===5){
text("And gets rid of your\n frustrating mouse!",30,40);
noCursor();
}
if(num===6){
text("        Which gets\nreplaced by Winston!",20,40);
}
if(num===7){
textSize(25);
text("Next time you press the button,\nsomething special will happen!",25,30);
}
if(num===8){
text("  It's called having 7\npresses instead of 6!",20,40);
}
if(num===9){
textSize(25);
text("You know, I'm getting tired of this\n         button being pressed.",20,40);
}
if(num>8){
textSize(25);
}
if(num===10){
text("Did you even read that sentence\nthat said that I was getting tired?",20,20);
}
if(num===11){
text("I guess not.",145,20);
}
if(num===12){
text("By the way, computer is\noperating the background.",60,20);
}
if(num===13){
text("And I'm sick of that background\n                   changing!",20,20);
}
if(num===14){
text("computer , please turn off the\n background changy thingy.",40,20);
}
if(num>14){
thing-=10;
}
if(num===15){
text("Thank you.",140,20);
}
if(num===16){
text("Now, back to you and pressing\n                   the button.",20,20);
}
if(num===17){
text("S-T-O-P\nSTOP!!!",160,20);
}
if(num===18){
text("If you can't read, let me know by\npressing the I can't read button.",20,20);
fill(255, 0, 0);
rect(140,330,150,60);
fill(0, 0, 0);
text("I can't read",150,370);
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
if(noread===true){
background(0, 30, 255);
fill(thing/2,255-thing,thing);
ellipse(200,200,200,200);
ellipse(number,200,200,200);
fill(0);
textSize(40);
text("Button",number-50,210);
textSize(20);
text(num-1+" presses",170,320);
textSize(25);
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
text("How could read what was on that\n button when you couldn't read?\n                   Seriously.",20,20);
}
}
if(num===19&&noread===false){
text("Good thing you can read.",60,20);
}else if(num===19&&noread===true){
text("You are a BIG liar!!!!",90,20);
}
if(num===20){
text("Anyway, stop pressing this button.",10,20);
}
if(num===21){
text("I'll MAKE you stop! Goodbye,\n                   Winston!",40,20);
}
if(num===22){
text("Goodbye, button.",100,20);
}
if(num===23){
background(0, 30, 255);
}
if(num===24){
text("Still pressing?",130,20);
}
if(num===25){
text("Here, you can have Winston back.",10,20);
}
if(num===26){
text("You know you can stop pressing,\n                      right?",20,20);
}
if(num===27){
text("Obviously you don't.",90,20);
}
if(num===28){
text("Just stop it already.",90,20);
}
if(num===29){
text("Fine, I'll call you Mr. NoNoListener.",5,20);
}
if(num===30){
text("Wow, I can't believe you don't\n   mind me calling you that,\n          Mr. NoNoListener.",30,20);
}
if(num===31){
text("Aren't you getting bored of this??",20,20);
}
if(num===32){
text("If you're an adult, don't you have\n                  work to do?",20,20);
}
if(num===33){
text("If you are a kid, don't you need to\ndo your homework and go build\n  with Legos or play with dolls?",20,20);
}
if(num===34){
text("Well,since you aren't stopping,\n you are not a kid or adult!You\n        must be a teenager.",20,20);
}
if(num===35){
text("How are middle school and\n       highschool going?",50,20);
}
if(num===36){
text("Good? Good. But please....",60,20);
}
if(num===37){
text("STOP PRESSING THIS BUTTON!",10,20);
}
if(num===38){
mouseplacewinst=65;
winstsize=130;
text("I think Winston got bigger.",60,20);
}
if(num===39){
text("He really needs to cut down on\n               those donuts!",20,20);
}
if(num===40){
text("3 years later.....",120,20);
winstsize=40;
mouseplacewinst=20;
}
if(num===41){
    textSize(20);
text("If you are wondering how Winston shrunk\nagain, I'd be happy to tell you that I stole\nall of his donuts, which made him skinny.",20,20);
}
if(num===42){
text("You know what would make life\n                    better?",20,20);
}
if(num===43){
text("You not pressing this button!",40,20);
}
if(num===44){
text("OK,now you're gonna have to live\n   with my unproper grammars.",20,20);
}
if(num===45){
text("Why aren't you cracking up?",50,20);
}
if(num===46){
text("Is it because this button is about\n               to disappear?",20,20);
}
if(num===47){
background(0, 30, 255);
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
}
if(num===48){
text("Yuw stil ar'ent lafing!",80,20);
}
if(num===49){
text("Press it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",20,20);
}
if(num===50){
text("Darn, that didn't work.",80,20);
}
if(num===51){
image(getImage("creatures/Winston"),mouseX+120,mouseY+120,40,40);
mouseplacewinst=150;
text("Ha, which is your mouse?",60,20);
}
if(num===52){
mouseplacewinst=20;
text("That didn't fool you. :-(",20,20);
}
if(num===53){
winstsize=random(0,1600);
mouseplacewinst=random(1,800);
text("Bam!",180,20);
}
if(num===54){
winstsize=40;
mouseplacewinst=20;
text("Hmm, what should I do?",70,20);
}
if(num===55){
text("Let's play a game called DON'T\n    PRESS THE BIG BUTTON.",20,20);
}
if(num===56){
text("Do you know how to play?",60,20);
}
if(num===57){
text("All you have to do is stop pressing\n                  this button.",15,20);
}
if(num===58){
text("I guess you aren't in the mood for\n                       games.",20,20);
}
if(num===59){
text("Look at that bomb!",100,20);
strokeWeight(5);
bomb(360,100);
}
if(num===60){
text("It's gonna blow!!!",100,20);
strokeWeight(5);
bomb(360,100);
}
if(num===61){
strokeWeight(5);
bomb(360,100);
countdown+=1;
text("",20,20);
if(countdown>40){
background(0,30,255);
fill(random(1,255),random(1,255),random(1,255));
textSize(100);
text("BOOM",50,220);
}
if(countdown>80){
background(0, 30, 255);
fill(0, 0, 0);
strokeWeight(1);
stroke(0, 0, 0);
textSize(20);
text(num-1+" presses",170,320);
fill(thing/2,255-thing,thing);
ellipse(200,200,200,200);
ellipse(number,200,200,200);
fill(0);
textSize(40);
text("Button",number-50,210);
image(getImage("creatures/Winston"),mouseX-mouseplacewinst,mouseY-mouseplacewinst,winstsize,winstsize);
}
}
if(num===62){
text("How did you survive that?",60,20);
}
if(num===63){
text("Please stop. I asked nicely. :-)",20,20);
}
if(num===64){
text("I am tempted to take all of your\nhot dogs right now!!!!!!!!!!!!!!!!!!!",20,20);
}
if(num===65){
text("Whad'ya mean you have no more\n                    hot dogs?",20,20);
}
if(num===66){
    textSize(23);
text("Maybe you need to see 'Stop pressing!'\n                         backwards.",0,20);
}
if(num===67){
text("!gnisserp potS",120,20);
}
if(num===68){
    textSize(22);
text("  How about you click the button down\nthere that says restart on it and has two\narrows forming a circle.That would make\nthings easier because all the pressing...",14,20);
}
if(num===69){
text("...would be reset!",100,20);
}
if(num===70){
text(" That restart button is much better\nthan the button you keep pressing.",10,20);
}
if(num===71){
    textSize(20);
text("Just because you keep pressing this button\ndoesn't mean that it's good to press it.In\n    fact, it's bad to press this button.",20,20);
}
if(num===72){
    textSize(24);
text("Every time this button gets pressed,\nyou will die 1 millisecond earlier than\n        you would if you hadn't.",5,20);
}
if(num===73){
    textSize(21);
text("So right now you lost 1 millisecond of life!",10,20);
}
if(num===74){
text("Hmm,maybe there is another thing\nI can do to try to prevent you from\n           pressing the button.",10,20);
}
if(num===79){
text("I'll make a deal with you.",60,20);
}
if(num===80){
text("You stop pressing this button, and\nI won't give you any more trouble.",10,20);
}
if(num===81){
text("Deal? Great!",130,20);
}
if(num===82){
text("I thought we made a deal!!!!!!!!!!!",20,20);
}
if(num===83){
    textSize(22);
text("Well, I guess I have no choice but to...",20,20);
}
if(num===84){
background(random(200,255), random(0,255), 0);
countdown=0;
strokeWeight(5);
bomb(random(1,200),random(1,200));
bomb(random(1,400),random(1,400));
bomb(random(1,200),random(1,400));
bomb(random(1,400),random(1,200));
fill(255, 0, random(0,155));
textSize(100);
text("BOOM",random(1,300),random(1,300));
text("BOOM",random(1,300),random(1,300));
text("BOOM",random(1,300),random(1,300));
text("BOOM",random(1,300),random(1,300));
}
if(num===85){
text("But,but,but,but,but,but,but,but,but.",10,20);
}
if(num===86){
text("Aha!!!!!! Try to press the button!\n              It won't let you!",20,20);
rotate(40);
textSize(50);
fill(random(0,255),random(0,255),random(0,255));
text("Bye!",250,180);
fill(0, 0, 0);
rotate(-40);
}
};
