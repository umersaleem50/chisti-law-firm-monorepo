import Textbox from '@/Components/Inputs/Textbox/Textbox';
import Modal from 'react-modal';
import classes from './addCase.module.scss';
import Button from '@/Components/Button/Button';
import Typography from '@/Components/Typography/Typography';
import { caseTypesPakistanObjects } from './caseType';
import Select_Input from '@/Components/Inputs/Select/Select_Input';

interface Setters {
  setIsOpen: any;
  setTitle: any;
  setCaseCategory: any;
  setCourtName: any;
  setNextDate: any;
  setPrevDate: any;
  setStage: any;
}
interface Values {
  isOpen: boolean;
  title: string;
  caseCategory: string;
  courtName: string;
  prevDate: string;
  stage: string;
  nextDate: string;
}

export interface IAddCase {
  values: Values;
  setters: Setters;
  onSubmit: any;
}
function AddCase({ values, setters, onSubmit }: IAddCase) {
  const handleClose = () => {
    setters.setIsOpen(false);
  };

  const handleSelectCase = (e: any) => {
    setters.setCaseCategory(e.target.value);
  };

  return (
    <Modal
      className={classes['modal']}
      isOpen={values.isOpen}
      onRequestClose={handleClose}
      contentLabel="Add Case"
    >
      <form className={classes['form']} onSubmit={onSubmit}>
        <Typography component="h5" vairent="secondary">
          Add Case
        </Typography>

        <Select_Input
          selected={values.caseCategory}
          options={caseTypesPakistanObjects}
          value={values.caseCategory}
          onChange={handleSelectCase}
        />

        <Textbox
          label="Case Title"
          placeholder="Enter the case title"
          value={values.title}
          varient="field"
          onChange={(e) => setters.setTitle(e.target.value)}
        />
        <Textbox
          label="Case Stage"
          placeholder="Enter the Stage"
          value={values.stage}
          varient="field"
          onChange={(e) => setters.setStage(e.target.value)}
        />
        <Textbox
          label="Court Name"
          placeholder="Enter the Court Name"
          value={values.courtName}
          varient="field"
          onChange={(e) => setters.setCourtName(e.target.value)}
        />

        <Textbox
          label="Next Date"
          value={values.nextDate}
          varient="field"
          type="date"
          onChange={(e) => setters.setNextDate(e.target.value)}
        />
        <Textbox
          label="Prev Date"
          value={values.prevDate}
          type="date"
          onChange={(e) => setters.setPrevDate(e.target.value)}
        />

        <Button
          style={{ textAlign: 'center', marginTop: '2rem' }}
          isActive
          varient="fullwidth"
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
}

export default AddCase;
