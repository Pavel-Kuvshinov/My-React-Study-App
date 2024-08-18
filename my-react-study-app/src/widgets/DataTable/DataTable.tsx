import React from 'react';
import './DataTable.css'
import { FormFieldsNames } from '../../shared/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';

function DataTable() {
	const uncontrolledFormData = useSelector((state: RootState) => state.UncontrolledFormReducer);
	const reactHookFormData = useSelector((state: RootState) => state.ReactHookFormReducer);
	// console.log(uncontrolledFormData);
	// console.log(reactHookFormData);
  
    return (
		<>
			<div className="data_table">
				<div className="data_table__header">Fields</div>
				<div className="data_table__header">Uncontrolled Form Data</div>
				<div className="data_table__header">React Hook Form Data</div>
				{Object.entries(FormFieldsNames).map(([key, fieldName]) => {
					return (
					<React.Fragment key={fieldName}>
						<div className="data_table__cell">{key}:</div>
						<div className="data_table__cell">
							{uncontrolledFormData[fieldName] ? fieldName === FormFieldsNames.Picture ? <img className='data_table__cell_image' src={uncontrolledFormData[fieldName] as string} alt="img" /> : uncontrolledFormData[fieldName] === "on" ? "✅" : uncontrolledFormData[fieldName] : 'No data' }
						</div>
						<div className="data_table__cell">
							{reactHookFormData[fieldName] ? fieldName === FormFieldsNames.Picture ? <img className='data_table__cell_image' src={reactHookFormData[fieldName] as string} alt="img" /> : reactHookFormData[fieldName] === true ? "✅" : reactHookFormData[fieldName] : 'No data' }
						</div>
					</React.Fragment>
					);
				})}
			</div>
		</>
    )
}
  
export default DataTable;
  