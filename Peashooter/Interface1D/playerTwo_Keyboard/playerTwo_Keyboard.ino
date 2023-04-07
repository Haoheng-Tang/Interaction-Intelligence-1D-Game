#include "Keyboard.h"

//declaring button pins for playerOne
const int BbuttonPin = 8;   
const int MbuttonPin = 7;     
const int lessbuttonPin = 6;   
const int morebuttonPin = 5;          

int previousBbuttonState = HIGH; 
int previousMbuttonState = HIGH; 
int previouslessbuttonState = HIGH; 
int previousmorebuttonState = HIGH; 

void setup() {
  //declare the buttons as input_pullup
  pinMode(BbuttonPin, INPUT_PULLUP);  
  pinMode(MbuttonPin, INPUT_PULLUP);
  pinMode(lessbuttonPin, INPUT_PULLUP);  
  pinMode(morebuttonPin, INPUT_PULLUP); 
  Keyboard.begin();
}

void loop() {
/*********************************playerTwo******************************************/
//"B"
  int BbuttonState = digitalRead(BbuttonPin);
  //checking the state of the button
  if (BbuttonState == LOW && previousBbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(66);
    delay(50);
  }

  if (BbuttonState == HIGH && previousBbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(66);
    delay(50);
  }
  previousBbuttonState = BbuttonState;
  
  //"M"
  int MbuttonState = digitalRead(MbuttonPin);
  if (MbuttonState == LOW && previousMbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(77);
    delay(50);
  }

  if (MbuttonState == HIGH && previousMbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(77);
    delay(50);
  }
  previousMbuttonState = MbuttonState;

  
  //"less"
  int lessbuttonState = digitalRead(lessbuttonPin);
  //checking the state of the button
  if (lessbuttonState == LOW && previouslessbuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(60);
    delay(50);
  }

  if (lessbuttonState == HIGH && previouslessbuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(60);
    delay(50);
  }
  previouslessbuttonState = lessbuttonState;

  //"more"
  int morebuttonState = digitalRead(morebuttonPin);
  if (morebuttonState == LOW && previousmorebuttonState == HIGH) {
      // and it's currently pressed:
    Keyboard.press(62);
    delay(50);
  }

  if (morebuttonState == HIGH && previousmorebuttonState == LOW) {
      // and it's currently released:
    Keyboard.release(62);
    delay(50);
  }
  previousmorebuttonState = morebuttonState;
}