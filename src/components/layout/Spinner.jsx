import SpinnerGIF from './assets/spinner.gif';

function Spinner() {
	return (
		<div className='w-100 mt-200'>
			<img width={180} className="text-center mx-auto" src={SpinnerGIF} alt="Loading..." />
		</div>
	)
}

export default Spinner;