import { ComboBox } from "@hilla/react-components/ComboBox.js";
import { Crud, crudPath } from "@hilla/react-components/Crud.js";
import { EmailField } from "@hilla/react-components/EmailField.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { useEffect, useState } from "react";
import { usePeople } from "../People.js";

export default function CrudEditorContent() {
  const people = usePeople();
  const [professions, setProfessions] = useState<String[]>([]);

  const responsiveSteps = [
    { minWidth: "0", columns: 1 },
    { minWidth: "30em", columns: 2 },
  ];

  useEffect(() => {
    setProfessions(
      Array.from(new Set(people.map((person) => person.profession))).sort()
    );
  }, [people]);

  return (
    <Crud include="firstName, lastName, email, profession" items={people}>
      <FormLayout
        slot="form"
        style={{ maxWidth: "480px" }}
        responsiveSteps={responsiveSteps}
      >
        <TextField label="First name" {...crudPath("firstName")} required />
        <TextField label="Last name" {...crudPath("lastName")} required />
        {/*// @ts-ignore https://github.com/vaadin/react-components/issues/70 */}
        <EmailField colspan="2" label="Email" path="email" required />
        {/*// @ts-ignore https://github.com/vaadin/react-components/issues/70 */ /* prettier-ignore */}
        <ComboBox colspan="2"
        label="Profession"
        path="profession"
        items={professions}
        required
      />
      </FormLayout>
    </Crud>
  );
}
