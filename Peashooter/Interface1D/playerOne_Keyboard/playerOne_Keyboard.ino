#include "Keyboard.h"

//declaring button pins for playerOne
const int AbuttonPin = 8;   
const int DbuttonPin = 7;     
const int FbuttonPin = 6;   
const int GbuttonPin = 5;          

int previousAbuttonState = HIGH; 
int previousDbuttonState = HIGH; 
int previousFbuttonState = HIGH; 
int previousGbuttonState = HIGH; 

void setup() {
  //declare the buttons as input_pullup
  pinMode(AbuttonPin, INPUT_PULLUP);  
  pinMode(DbuttonPin, INPUT_PULLUP);
  pinMode(FbuttonPin, INPUT_PULLUP);  
  pinMode(GbuttonPin, INPUT_PULLUP); 
  Keyboard.begin();
}

void loop() {
/*********************************playerOne******************************************/
//"A"
  int AbuttonState = digitalRead(AbuttonPin);
  //checking the state of the button
  if (AbuttonState == LOW && previousAbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(65);
    delay(50);
  }

  if (AbuttonState == HIGH && previousAbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(65);
    delay(50);
  }
  previousAbuttonState = AbuttonState;
  
  //"D"
  int DbuttonState = digitalRead(DbuttonPin);
  if (DbuttonState == LOW && previousDbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(68);
    delay(50);
  }

  if (DbuttonState == HIGH && previousDbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(68);
    delay(50);
  }
  previousDbuttonState = DbuttonState;

  
  //"F"
  int FbuttonState = digitalRead(FbuttonPin);
  //checking the state of the button
  if (FbuttonState == LOW && previousFbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(70);
    delay(50);
  }

  if (FbuttonState == HIGH && previousFbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(70);
    delay(50);
  }
  previousFbuttonState = FbuttonState;

  //"G"
  int GbuttonState = digitalRead(GbuttonPin);
  if (GbuttonState == LOW && previousGbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(71);
    delay(50);
  }

  if (GbuttonState == HIGH && previousGbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(71);
    delay(50);
  }
  previousGbuttonState = GbuttonState;
}