import { FC, ReactElement, useState, useEffect } from 'react'
import { fetchPage } from 'services/apiService'
import { PageMeta } from 'components'
import { WithSpinner } from 'hocs'
import useTranslations from 'i18n/useTranslations'

interface pageI {
  settings: {
    title: string,
    backgroundImage: string
  },
  components: string[]
}

const Engine: FC = (): ReactElement => {
  const { t } = useTranslations()

  const [page, setPage] = useState<pageI>({ components: [], settings: { backgroundImage: "", title: "" } });
  const [shouldSpin, setShouldSpin] = useState(false);

  const getPage = async () => {
    setShouldSpin(true)
    const result = await fetchPage('homepage');
    if (result) {
      setPage(result);
      setShouldSpin(false)
    } else {
      setShouldSpin(false)
    }
  };

  useEffect(() => {
    let isMount = true;

    if (isMount) {
      getPage();
    }

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <div className='main engine'>
      <PageMeta title={t.pageNames.engine} description='Engine' />
      <h1>{t.engineText}</h1>
      <div>
        <WithSpinner isSpinnerShown={shouldSpin} minTimeSpinnerShown={300}>
          <h3>{page?.settings?.title}</h3>
        </WithSpinner>
      </div>
    </div>
  )
}

export { Engine }
