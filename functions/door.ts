import DoorModel from '../model/door'


export function createDoor(qtd: number, withGift:number): DoorModel[]{
  return Array.from({ length: qtd}, (_, i )=> {
    const number = i + 1
    const haveGift = number === withGift
    return new DoorModel(number, haveGift)
  })
}

export function addDoors(porta: DoorModel[], PortaModificada: DoorModel): DoorModel[]{
  return porta.map(currentPort => {
    const sameAsModified = currentPort.number === PortaModificada.number

    if(sameAsModified){
      return PortaModificada
    }else {
      return PortaModificada.open ? currentPort : currentPort.deselect()
    }
  })
}