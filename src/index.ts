import DataTable from 'datatables.net-dt';

export function initializeDataTable(ref: string) {
	new DataTable(ref, {
		serverSide: true,
		ajax: `http://${process.env.HOST_NAME}/data`,
		columns: [
			{ data: 'name' },
			{ data: 'position' },
			{ data: 'office' },
			{ data: 'extn' },
			{ data: 'startDate' },
			{ data: 'salary' },
		],
	});
}
