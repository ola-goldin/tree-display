import { Folder } from "./interfaces";

export function generateData(): Folder {

	var idCounter = 0;

	var id = function (): string {

		return (`node-${++idCounter}`);

	};

	return ({
		uid: id(),
		name: "Connections",
		icon: "bi bi-gear-wide-connected",
		files: [
			{
				uid: id(),
				name: ""
			}
		],
		folders: [
			{
				uid: id(),
				name: "PostgreSQL-Dev",
				icon: "bi bi-gear-wide-connected",
				files: [
					{
						uid: id(),
						name: "playground",

					},
					{
						uid: id(),
						name: "playground_sample",
					}
				],
				folders: [
					{
						uid: id(),
						name: "postgres",
						icon:"bi bi-server",
						files: [                      
						],
						folders: [
							{
								uid: id(),
								name: "Schemas",
								icon:"bi bi-textarea",
								files: [
									{
										uid: id(),
										name: "huge_schema"
									},
									{
										uid: id(),
										name: "info_schema"
									},
									{
										uid: id(),
										name: "public"
									},
								],
								folders: [
									{
										uid: id(),
										name: "topology",
										icon:"bi bi-textarea",
										files: [

										],
										folders: [
											{
												uid: id(),
												name: "Tables",
												icon:"bi bi-table",
												files: [

												],
												folders: [
													{
														uid: id(),
														name: "user",
														icon:"bi bi-table",
														files: [
															{
																uid: id(),
																name: "id (number)"
															},
															{
																uid: id(),
																name: "first_name (string)"
															},
															{
																uid: id(),
																name: "last_name (string)"
															},
														],
														folders: [

														]
													}, {
														uid: id(),
														name: "order",
														icon:"bi bi-table",
														files: [
															{
																uid: id(),
																name: "id (number)"
															},
															{
																uid: id(),
																name: "product_id (number)"
															},
															{
																uid: id(),
																name: "barcode (string)"
															},
														],
														folders: [

														]
													}
												]
											}
										]
									},
									{
										uid: id(),
										name: "animals",
										icon:"bi bi-textarea",
										files: [

										],
										folders: [
											{
												uid: id(),
												name: "Tables",
												icon:"bi bi-table",
												files: [

												],
												folders: [
													{
														uid: id(),
														name: "felines",
														icon:"bi bi-table",
														files: [
															{
																uid: id(),
																name: "id (number)"
															},
															{
																uid: id(),
																name: "type (string)"
															},
															{
																uid: id(),
																name: "hasStripes (boolean)"
															},
														],
														folders: [

														]
													}, {
														uid: id(),
														name: "birds",
														icon:"bi bi-table",
														files: [
															{
																uid: id(),
																name: "id (number)"
															},
															{
																uid: id(),
																name: "canFly (boolean)"
															},
															{
																uid: id(),
																name: "type (number)"
															},
														],
														folders: [

														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						uid: id(),
						name: "postgres_temp",
						icon:"bi bi-server",
						files: [],
						folders: []
					}
				]
			},
			{
				uid: id(),
				name: "PostgreSQL-Prod",
				icon: "bi bi-gear-wide-connected",
				files: [],
				folders: [
					{
						uid: id(),
						name: "mobile-app",
						icon:"bi bi-server",
						files: [
							{
								uid: id(),
								name: "dashboard"
							},
							{
								uid: id(),
								name: "statistics"
							}
						],
						folders: [
							{
								uid: id(),
								name: "Schemas",
								icon:"bi bi-textarea",
								files: [],
								folders: [
									{
										uid: id(),
										name: "monthly_stats",
										icon:"bi bi-textarea",
										files: [
											{
												uid: id(),
												name: "visitors"
											},
											{
												uid: id(),
												name: "subscribers"
											},
										],
										folders: [{
											uid: id(),
											name: "Tables",
											icon:"bi bi-table",
											files: [{
												uid: id(),
												name: "users"
											},
											{
												uid: id(),
												name: "addresses"
											},],
											folders: [

											]
										}
										]
									},

								]
							}

						]
					}
				]
			},
			{
				uid: id(),
				name: "PostgreSQL-Test",
				icon: "bi bi-gear-wide-connected",
				files: [],
				folders: [
					{
						uid: id(),
						name: "bi bi-table",
						icon:"folder",
						files: [
							{
								uid: id(),
								name: "my-test"
							},
						],
						folders: [
							{
								uid: id(),
								name: "Schemas",
								icon:"bi bi-textarea",
								files: [],
								folders: [
									{
										uid: id(),
										name: "events",
										icon:"bi bi-textarea",
										files: [
											{
												uid: id(),
												name: "events-1"
											},
											{
												uid: id(),
												name: "events-22"
											},
										],
										folders: []
									},
									{
										uid: id(),
										name: "logs",
										icon:"bi bi-textarea",
										files: [
											{
												uid: id(),
												name: "test-logs"
											},

										],
										folders: []
									},
									{
										uid: id(),
										name: "Miscellaneous",
										icon:"bi bi-textarea",
										files: [
											{
												uid: id(),
												name: "compilation-1"
											},
											{
												uid: id(),
												name: "compilation-2"
											},
										],
										folders: []
									}
								]
							},

						]
					}
				]
			}
		]
	});

}