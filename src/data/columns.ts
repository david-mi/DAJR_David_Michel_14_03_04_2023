import type { Employee } from "../context/EmployeesContext";

export interface Column<T> {
  title: string;
  /** a property from Row */
  accessor: T;
}

export const columns: Column<keyof Employee>[] = [
  {
    title: "First Name",
    accessor: "firstName"
  },
  {
    title: "Last Name",
    accessor: "lastName"
  },
  {
    title: "Start Date",
    accessor: "startDate"
  },
  {
    title: "Department",
    accessor: "department"
  },
  {
    title: "Date of Birth",
    accessor: "birthDate"
  },
  {
    title: "Street",
    accessor: "street"
  },
  {
    title: "State",
    accessor: "state"
  },
  {
    title: "City",
    accessor: "city"
  },
  {
    title: "Zip Code",
    accessor: "zipCode"
  }
]