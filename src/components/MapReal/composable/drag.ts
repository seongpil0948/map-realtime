export default function useDrag() {


  const handleDragStart = (event: any) => {
    console.log('DragStart', event)
  }
  const handleDragEnd = (event: any) => {
    console.log('DragEnd', event)
  }
  const handleDrag = (event: any) => {
    console.log('Drag', event)
  }
  return {
    handleDragStart,
    handleDragEnd,
    handleDrag
  }
}