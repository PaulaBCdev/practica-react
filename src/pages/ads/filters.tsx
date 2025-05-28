import { useState } from "react";
import FormField from "../../components/ui/form-field";

const Filters = () => {
  const [filters, setFilters] = useState({
    name: "",
  });

  const { name } = filters;

  return (
    <form>
      <FormField label="Name" type="text" value={name} />
    </form>
  );
};

export default Filters;
