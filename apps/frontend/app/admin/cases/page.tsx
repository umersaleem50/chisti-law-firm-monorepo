'use client';
import CasesTable from '@/Components/tables/cases/casesTable';
import AddCase from '@/Components/forms/addCase/addCase';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  return (
    <>
      <div style={{ width: '100%' }}>
        <CasesTable />
      </div>
    </>
  );
}
