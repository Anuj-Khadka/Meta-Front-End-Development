const DessertsList = (props) => {
  const lowCaloriesDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => { 
      return a.calories - b.calories; 
    })
    .map((dessert, index) => { 
      return ( 
        <li key={index}>
         {index}... {dessert.name} - {dessert.calories} cal 
        </li> 
      ); 
    }); 
  return <ul>{lowCaloriesDesserts}</ul>; 
 
 }
 export default DessertsList; 
 
 