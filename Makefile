upload:
	rsync -av ./build/* dailydictation.com:/home/huy/sites/khoahuy/breathe --progress --delete
