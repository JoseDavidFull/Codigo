const int rojoPin = 2;
const int amarilloPin = 3;
const int verdePin = 4;

void setup() {
  pinMode(rojoPin, OUTPUT);
  pinMode(amarilloPin, OUTPUT);
  pinMode(verdePin, OUTPUT);
}

void loop() {
  digitalWrite(verdePin, HIGH);   // Encender el LED verde
  delay(30000);                   // Retardo de 30 segundos
  
  digitalWrite(verdePin, LOW);    // Apagar el LED verde
  digitalWrite(amarilloPin, HIGH); // Encender el LED amarillo
  delay(5000);                    // Retardo de 5 segundos
  
  digitalWrite(amarilloPin, LOW);  // Apagar el LED amarillo
  digitalWrite(rojoPin, HIGH);     // Encender el LED rojo
  delay(5000);                     // Retardo de 5 segundos
  
  digitalWrite(rojoPin, LOW);      // Apagar el LED rojo
}
