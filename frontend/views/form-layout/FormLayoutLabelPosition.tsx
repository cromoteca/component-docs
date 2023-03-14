import { FormItem } from "@hilla/react-components/FormItem.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";

export default function FormLayoutLabelPosition() {
    return (
        <FormLayout>
            <FormItem>
                <label slot="label">Revenue</label>
                <TextField>
                    <span slot="suffix">EUR</span>
                </TextField>
            </FormItem>
            <FormItem>
                <label slot="label">Expenses</label>
                <TextField>
                    <span slot="suffix">EUR</span>
                </TextField>
            </FormItem>
            <FormItem>
                <label slot="label">Invoices</label>
                <TextField>
                    <span slot="suffix">EUR</span>
                </TextField>
            </FormItem>
        </FormLayout>
    );
}
