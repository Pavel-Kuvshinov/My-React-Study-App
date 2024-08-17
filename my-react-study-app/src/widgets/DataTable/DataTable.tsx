import React from 'react';
import './DataTable.css'
import { FormFieldsNames } from '../../shared/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';

function DataTable() {
	const uncontrolledFormData = useSelector((state: RootState) => state.UncontrolledFormReducer);
	const reactHookFormData = useSelector((state: RootState) => state.ReactHookFormReducer);
	console.log(uncontrolledFormData);
	console.log(reactHookFormData);
  
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
							{!uncontrolledFormData[fieldName] ? 'No data' : uncontrolledFormData[fieldName] === "on" ? "✅" : uncontrolledFormData[fieldName] }
						</div>
						<div className="data_table__cell">
							{!reactHookFormData[fieldName] ? 'No data' : reactHookFormData[fieldName] === true ? "✅" : reactHookFormData[fieldName] }
						</div>
					</React.Fragment>
					);
				})}
			</div>
		</>
    )
}
  
export default DataTable;
  