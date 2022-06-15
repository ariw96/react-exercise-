import React, { useState } from "react";
import { CarouselItem } from "react-bootstrap";

function Marking() {
    const init =[	{
        checked: false,
    },
    {
        checked: false,
    },
    {
        checked: false,
    },
    {
        checked: true,
    },
    {
        checked: false,
    },
    {
        checked: true,
    },]
	const [checked, setChecked] = useState(
	init
	);
	
    const handleReset = () => {
        setChecked([{
            checked: false,
        }
        ,{
            checked: false,
        },{
            checked: false,
        },{
            checked: true,
        },{
            checked: false,
        },{
            checked: true,
        }])
       
    }

	const handleDeleted = (arr) => {
      const filter = arr.filter((item) => {
            return item.checked === false;
        });
        setChecked(filter);
	};

	
	const handleCheck = (item) => {
		if (item.checked) {
			item.checked = false;
			setChecked([...checked]);
		} else {
			item.checked = true;
			setChecked([...checked]);
		}
	};
	return (
		<>
			<button onClick={() => handleReset}>reset</button>
			<button onClick={() => handleDeleted(checked)}>delete</button>
			{checked.map((item, index) => {
				return (
					<li>
						<label>
							<input
								type="checkbox"
								checked={item.checked}
								onChange={() => handleCheck(item)}
							/>
							; Check Me!
						</label>
					</li>
				);
			})}
		</>
	);
}

export default Marking;
