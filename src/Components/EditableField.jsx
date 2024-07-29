import React from 'react';

const EditableField = (props) => {
    // console.log(props.cellData.type)
    const { cellData } = props;
    const type = cellData?.type;
   
    return (
        
        
        <div>
            {cellData?.leading && (
                <span>
                    {cellData.leading}
                </span>
            )}
            <input
                className={cellData?.className}
                type={type}
                placeholder={cellData?.placeholder}
                min={cellData?.min}
                name={cellData?.name}
                id={cellData?.id}
                value={cellData?.value}
                step={cellData?.step}
                precision={cellData?.precision}
                aria-label={cellData?.name}
                onChange={props.onItemizedItemEdit}
                required
            />
        </div>
       
    );
};

export default EditableField;