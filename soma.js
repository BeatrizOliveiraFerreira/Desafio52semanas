const numeroDeSemanas = Array.from(Array(53).keys())
const total = numeroDeSemanas.reduce(
  (total, currentElement) => total + currentElement
)

console.log(`O total é: ${total} reais`)
