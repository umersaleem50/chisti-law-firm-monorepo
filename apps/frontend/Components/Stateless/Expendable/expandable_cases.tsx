import Button from '@/Components/Button/Button';
import Typography from '@/Components/Typography/Typography';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const dateTypes = ['createOn', 'nextDate', 'prevDate'];
const isTypeDate = (date: string) => {
  return dateTypes.includes(date);
};

function ExpandableCase({ data }: { data: any }) {
  const { _id, __v, ...restData } = data;
  const objectKeys = Object.keys(restData);
  const objectValues = Object.values(restData);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const response = await axios({
        url:
          process.env.API_PATH ||
          'http://localhost:3333/api/v1' + '/cases/' + id,
        method: 'delete',
      });
      if (response.status === 204) {
        alert('Deleted cases successfully!');
        router.refresh();
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
      alert('something went wrong.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      {objectKeys.map((el: any, i: number) => {
        if (isTypeDate(el)) {
          const dateString: string | any = objectValues[i];
          objectValues[i] = new Date(dateString).toDateString();
        }
        return (
          <Typography vairent="p" component="p" key={i}>
            {el + ': ' + objectValues[i]}
          </Typography>
        );
      })}

      <Button
        varient="primary"
        style={{ marginTop: '1rem' }}
        // onClick={handleUpdate}
      >
        Update
      </Button>
      <Button
        varient="outline"
        style={{ marginTop: '1rem', marginLeft: '2rem' }}
        onClick={() => handleDelete(_id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default ExpandableCase;
