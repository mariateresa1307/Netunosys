import React from "react"
import TouchCarousel from "react-touch-carousel"
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC"

const listOfData = [
  // your data array here
]

function CarouselContainer(props) {
  // render the carousel structure
}

function renderCard(index, modIndex, cursor) {
  const item = listOfData[modIndex]
  // render the item
}

;<TouchCarousel component={CarouselContainer} cardCount={listOfData.length} cardSize={375} renderCard={renderCard} loop autoplay={3000} />
