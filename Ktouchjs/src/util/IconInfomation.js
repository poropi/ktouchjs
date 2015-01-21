var IconInfomation = {
		getIconStatus : function (iconNumber, mode) {
			switch (mode) {
			case Mode.DECADE:
				
				return KTouchMode.DECADE[iconNumber];

			case Mode.DIEND:

				return KTouchMode.DIEND[iconNumber];

			case Mode.SHOWA1:

				return KTouchMode.SHOWA1[iconNumber];

			case Mode.SHOWA2:

				return KTouchMode.SHOWA2[iconNumber];

			default:
				return KTouchMode.DECADE[iconNumber];
			}
		},
		
		getCallSequenceNumber : function (count) {
			return CallSequenceNumber[count];
		}


}