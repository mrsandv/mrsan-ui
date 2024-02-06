import React from 'react'
import {
	AdjustmentsHorizontalIcon,
	ArrowDownTrayIcon,
	ArrowPathIcon,
	BanknotesIcon,
	ChartBarIcon,
	CheckBadgeIcon,
	CheckCircleIcon,
	ClipboardDocumentIcon,
	CodeBracketIcon,
	CommandLineIcon,
	CreditCardIcon,
	DocumentChartBarIcon,
	EllipsisVerticalIcon,
	EnvelopeIcon,
	ExclamationTriangleIcon,
	EyeIcon,
	EyeSlashIcon,
	FingerPrintIcon,
	FireIcon,
	HomeModernIcon,
	KeyIcon,
	LinkIcon,
	LockClosedIcon,
	PlusIcon,
	PrinterIcon,
	QuestionMarkCircleIcon,
	QueueListIcon,
	ReceiptPercentIcon,
	SparklesIcon,
	TrophyIcon,
	UserIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

export type TRole = 'danger' | 'success' | 'caution' | 'info';

export const roles = {
	success: 'emerald',
	info: 'violet',
	caution: 'amber',
	danger: 'red',
};

export type TIcons =
	| 'sparks'
	| 'user'
	| 'users'
	| 'card'
	| 'bank'
	| 'mail'
	| 'check'
	| 'badge'
	| 'doc'
	| 'finger'
	| 'fire'
	| 'key'
	| 'receipt'
	| 'printer'
	| 'trophy'
	| 'sudo'
	| 'admin'
	| 'locked'
	| 'question'
	| 'more'
	| 'warning'
	| 'add'
	| 'home'
	| 'update'
	| 'close'
	| 'code'
	| 'queue'
	| 'chart'
	| 'link'
	| 'copy'
	| 'download';

const options = 'h-5 w-5 cursor-pointer hover:opacity-80';

export const icons = {
	user: <UserIcon className={options} />,
	users: <UsersIcon className={options} />,
	card: <CreditCardIcon className={options} />,
	bank: <BanknotesIcon className={options} />,
	mail: <EnvelopeIcon className={options} />,
	check: <CheckCircleIcon className={options} />,
	badge: <CheckBadgeIcon className={options} />,
	doc: <DocumentChartBarIcon className={options} />,
	finger: <FingerPrintIcon className={options} />,
	fire: <FireIcon className={options} />,
	key: <KeyIcon className={options} />,
	receipt: <ReceiptPercentIcon className={options} />,
	printer: <PrinterIcon className={options} />,
	trophy: <TrophyIcon className={options} />,
	sudo: <CommandLineIcon className={options} />,
	admin: <AdjustmentsHorizontalIcon className={options} />,
	locked: <LockClosedIcon className={options} />,
	question: <QuestionMarkCircleIcon className={options} />,
	more: <EllipsisVerticalIcon className={options} />,
	warning: <ExclamationTriangleIcon className={options} />,
	sparks: <SparklesIcon className={options} />,
	eye: <EyeIcon className={options} />,
	eyeSlash: <EyeSlashIcon className={options} />,
	add: <PlusIcon className={options} />,
	home: <HomeModernIcon className={options} />,
	update: <ArrowPathIcon className={options} />,
	close: <XMarkIcon className={options} />,
	code: <CodeBracketIcon className={options} />,
	queue: <QueueListIcon className={options} />,
	chart: <ChartBarIcon className={options} />,
	link: <LinkIcon className={options} />,
	copy: <ClipboardDocumentIcon className={options} />,
	download: <ArrowDownTrayIcon className={options} />,
};
