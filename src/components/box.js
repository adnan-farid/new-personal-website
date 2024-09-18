const Box = ({ title, items}) => {
  return (
    <div className='draw'>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px'}}>{item}</li>
        ))}
      </ul>
    </div>   
  );
};
export default Box;