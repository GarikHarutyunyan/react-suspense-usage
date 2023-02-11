import React from 'react';

const DatePicker = React.lazy(()=> import('antd/es/date-picker'));

function Second() {
    return (
        <div style={{height: '300px', width: '300px', backgroundColor: 'skyblue'}}>
          <DatePicker onChange={()=>console.log()}  />
          {'Second component'}
        </div>
    );
  }
  
  export default Second;
  