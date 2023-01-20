import { FC } from 'react';

import { Button, Typography } from '@mui/material';

const SearchBox: FC = () => {
  return (
      <Button
        sx={{width: '280px', height: '40px', border: '1px solid #CECDCE', borderRadius: '4'}}
        style={{textTransform: 'none'}}
      >
        <Typography color="white" fontWeight={600} fontSize={16}>
          Search ⌘K
        </Typography>
      </Button>
  )
}

export default SearchBox
